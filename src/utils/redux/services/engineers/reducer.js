import {
    FETCH_ENGINEER_DATA_FULFILLED, FETCH_ENGINEER_DATA_PENDING,
    FETCH_ENGINEER_DATA_REJECTED,
    FETCH_ENGINEERS_FULFILLED,
    FETCH_ENGINEERS_PENDING,
    FETCH_ENGINEERS_REJECTED
} from "./types";

const INITIAL_STATE = {
    umbra: { data: [], count: 0, loading: false, error: null },
    evastel: { data: [], count: 0, loading: false, error: null },
    microsoft: { data: [], count: 0, loading: false, error: null },
    ookla: { data: [], count: 0, loading: false, error: null },
    engineerData: { data: {}, loading: false, error: null }
};

export default function engineers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ENGINEERS_PENDING:
            return {
                ...state,
                [action.payload.department]: {
                    ...state[action.payload.department],
                    loading: true,
                    error: null,
                },
            };
        case FETCH_ENGINEERS_FULFILLED:
            return {
                ...state,
                [action.payload.department]: {
                    data: action.payload.data,
                    count: action.payload.count,
                    loading: false,
                    error: null,
                },
            };
        case FETCH_ENGINEERS_REJECTED:
            return {
                ...state,
                [action.payload.department]: {
                    ...state[action.payload.department],
                    loading: false,
                    error: action.error,
                },
            };

        // Single Engineer Data!
        case FETCH_ENGINEER_DATA_PENDING:
            return {
                ...state,
                engineerData: {
                    ...state["engineerData"],
                    loading: true,
                    error: null,
                },
            };
        case FETCH_ENGINEER_DATA_FULFILLED:
            return {
                ...state,
                engineerData: {
                    ...state["engineerData"],
                    data: action.payload.engineer,
                    loading: false,
                    error: null
                }
            }

        case FETCH_ENGINEER_DATA_REJECTED:
            return {
                ...state,
                engineerData: {
                    ...state["engineerData"],
                    loading: false,
                    error: action.error,
                },
            };
        default:
            return state;
    }
};
