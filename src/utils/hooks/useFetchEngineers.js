import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEngineers } from "../redux/services/engineers/actions";

export const useFetchEngineers = (department) => {
    const dispatch = useDispatch();
    const { data, count, loading, error } = useSelector(
        (state) => state.engineers[department]
    );

    const getEngineersData = useCallback(() => {
        dispatch(fetchEngineers(department));
    }, [department, dispatch]);

    useEffect(() => {
        getEngineersData();
    }, [getEngineersData]);

    return { data, count, loading, error };
};
