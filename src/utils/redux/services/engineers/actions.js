import {fetchEngineersData} from "../../../api";
import {
    FETCH_ENGINEER_DATA_FULFILLED,
    FETCH_ENGINEER_DATA_PENDING, FETCH_ENGINEER_DATA_REJECTED,
    FETCH_ENGINEERS_FULFILLED,
    FETCH_ENGINEERS_PENDING,
    FETCH_ENGINEERS_REJECTED
} from "./types";

export const fetchEngineers = (department) => async (dispatch) => {
    try {
        dispatch({ type: FETCH_ENGINEERS_PENDING,  payload: { department } });
        const data = await fetchEngineersData(department);
        const count = data.length;

        dispatch({
            type: FETCH_ENGINEERS_FULFILLED,
            payload: { department, data, count }
        });
    } catch (error) {
        dispatch({
            type: FETCH_ENGINEERS_REJECTED,
            error: error.message
        });
    }
};

export const getEngineerData = (department, eng) => async (dispatch) => {
    department = department.toLowerCase();

    try {
        dispatch({ type: FETCH_ENGINEER_DATA_PENDING,  payload: { department } });
        const response = await fetchEngineersData(department);

        const engineer = response.filter(engineer => engineer.name === eng)[0]??{};

        dispatch({
            type: FETCH_ENGINEER_DATA_FULFILLED,
            payload: { engineer }
        });
    } catch (error) {
        dispatch({
            type: FETCH_ENGINEER_DATA_REJECTED,
            error: error.message
        });
    }
};
