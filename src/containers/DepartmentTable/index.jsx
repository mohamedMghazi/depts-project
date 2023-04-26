import { useEffect, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "@material-ui/core";
import PropTypes from "prop-types";
import { fetchEngineers } from "../../utils/redux/services/engineers/actions";
import TableHeadWrapper from "../../components/TableHeadWrapper";
import TableBodyWrapper from "../../components/TableBodyWrapper";
import Count from "../../components/Count";
import Skeleton from "../../components/Skeleton";
import "./style.scss";

const DepartmentTable = memo(({ department }) => {
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

    if (loading) {
        return <Skeleton />;
    }

    if (error) {
        return <div>Oops, something went wrong. Please try again later.</div>;
    }

    return (
        <div id="department-table">
            <Count department={department} count={count} />

            {count > 0 && (
                <Table>
                    <TableHeadWrapper />
                    <TableBodyWrapper data={data} />
                </Table>
            )}
        </div>
    );
});

DepartmentTable.propTypes = {
    department: PropTypes.string.isRequired
};

export default DepartmentTable;
