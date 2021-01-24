import React, { useReducer } from "react";
import AnalyticsContext from "./analyticsContext";
import AnalyticsReducer from "./analyticsReducer";

import { LOAD_TREE_PLANTING_ACTIVITIES, TREE_PLANTING_ERROR } from "../types";
import axios from "axios";

const AnalyticsState = (props) => {
    const initialState = {
        treePlantingActivities: null,
        filteredActivities: null,
        currentActivity: null,
        loading: false,
        error: null,
    };

    const [state, dispatch] = useReducer(AnalyticsReducer, initialState);

    // Actions go here
    // get treePlanting Activities

    const loadTreePlantingActivites = async () => {
        try {
            const res = await axios.get("/locations");
            dispatch({
                type: LOAD_TREE_PLANTING_ACTIVITIES,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: TREE_PLANTING_ERROR,
                payload: error.response.message,
            });
        }
    };

    return (
        <AnalyticsContext.Provider
            value={{
                treePlantingActivities: state.treePlantingActivities,
                filteredActivities: state.filteredActivities,
                currentActivity: state.currentActivity,
                loading: state.loading,
                error: state.error,
                loadTreePlantingActivites,
            }}
        >
            {props.children}
        </AnalyticsContext.Provider>
    );
};

export default AnalyticsState;
