import React, { useContext, useEffect, useState } from "react";
// contexts go here
import AnalyticsContext from "./context/analyticsContext/analyticsContext";

// map stuff
import Map from "./components/Map/Map";
import GoogleMapReact from "google-map-react";
import "./App.css";

import axios from "axios";

axios.defaults.baseURL = "https://sitematching.herokuapp.com/api/v1";

const App = (props) => {
    const context = useContext(AnalyticsContext);
    const {
        treePlantingActivities,
        loading,
        filteredActivities,
        loadTreePlantingActivites,
    } = context;

    const [state, setState] = useState({
        location: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 10, // the lower the higher the map is
        hasUserLocation: false,
        userMessage: {
            name: "",
            message: "",
        },
    });

    const position = [state.location.lat, state.location.lng];

    useEffect(() => {
        loadTreePlantingActivites();

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setState({
                    ...state,
                    location: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    hasUserLocation: true,
                    zoom: 8,
                });
            },
            () => {
                console.log("uh..oh, no location provided");
                // denied geolocation so we go for ip
                fetch("https://ipapi.co/json")
                    .then((res) => res.json())
                    .then((location) => {
                        setState({
                            location: {
                                lat: location.latitude,
                                lng: location.longitude,
                            },
                            hasUserLocation: true,
                            zoom: 5,
                        });
                    })
                    .catch((error) => console.log(error));
            }
        );
    }, []);

    if (treePlantingActivities !== null && !loading) {
        console.log(treePlantingActivities, "=============");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...state,
            userMessage: {
                ...prevState.userMessage,
                [name]: value,
            },
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(state.userMessage);
    };

    return (
        <>
            {state.hasUserLocation ? (
                <Map
                    location={state.location}
                    zoom={state.zoom}
                    treePlantingActivities={treePlantingActivities}
                />
            ) : (
                <p> please allow location access </p>
            )}
        </>
    );
};

export default App;
