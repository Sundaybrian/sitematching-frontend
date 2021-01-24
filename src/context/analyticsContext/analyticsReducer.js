import {
    LOAD_TREE_PLANTING_ACTIVITIES,
    TREE_PLANTING_ERROR,
    SET_CURRENT,
    CLEAR_CURRENT,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case LOAD_TREE_PLANTING_ACTIVITIES:
            return {
                ...state,
                treePlantingActivities: action.payload,
                loading: false,
            };

        case SET_CURRENT:
            return {
                ...state,
                currentActivity: action.payload,
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                currentActivity: null,
            };
        default:
            return state;
    }
};
