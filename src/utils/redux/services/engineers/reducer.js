import {FETCH_ENGINEERS_FULFILLED, FETCH_ENGINEERS_PENDING, FETCH_ENGINEERS_REJECTED} from "./types";

const INITIAL_STATE = {
    umbra: { data: [], count: 0, loading: false, error: null },
    evastel: { data: [], count: 0, loading: false, error: null },
    microsoft: { data: [], count: 0, loading: false, error: null },
    ookla: { data: [], count: 0, loading: false, error: null },
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
        default:
            return state;
    }
};
