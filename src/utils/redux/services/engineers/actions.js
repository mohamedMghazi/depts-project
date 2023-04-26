import {fetchEngineersData} from "../../../api";
import {FETCH_ENGINEERS_FULFILLED, FETCH_ENGINEERS_PENDING, FETCH_ENGINEERS_REJECTED} from "./types";

export const fetchEngineers = (department) => async (dispatch) => {
    try {
        dispatch({ type: FETCH_ENGINEERS_PENDING,  payload: { department } });

        const response = await fetchEngineersData(department);
        const data = response.data;
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
