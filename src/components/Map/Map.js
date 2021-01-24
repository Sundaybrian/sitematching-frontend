import React from "react";
import GoogleMapReact from "google-map-react";
import MarkerIcon from "./MarkerIcon";
import "./map.css";

function Map(props) {
    const { location, zoom, treePlantingActivities } = props;

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.GOOGLE_MAP_API_KEY,
                }}
                defaultCenter={location}
                defaultZoom={zoom}
            >
                {treePlantingActivities !== null &&
                    treePlantingActivities.map((tree, index) => {
                        let position = [tree.Latitude, tree.Longitude];
                        return (
                            <MarkerIcon
                                key={index}
                                lat={tree.Latitude}
                                lng={tree.Longitude}
                                text="marker"
                            />
                        );
                    })}
            </GoogleMapReact>
        </div>
    );
}

export default Map;
