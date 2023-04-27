import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEngineerData } from "../redux/services/engineers/actions";

const useEngineerData = () => {
    const { dept, engineer } = useParams();
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector(
        (state) => state.engineers.engineerData
    );

    const fetchEngineerData = useCallback(() => {
        dispatch(getEngineerData(dept, engineer));
    }, [dispatch, dept, engineer]);

    useEffect(() => {
        fetchEngineerData();
    }, [fetchEngineerData]);

    return {
        data,
        loading,
        error,
    };
};

export default useEngineerData;
