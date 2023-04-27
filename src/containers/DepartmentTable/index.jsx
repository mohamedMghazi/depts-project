import { memo } from "react";
import { Table } from "@material-ui/core";
import PropTypes from "prop-types";
import {useFetchEngineers} from "../../utils/hooks/useFetchEngineers";

// components
import EngineersTableHead from "../../components/EngineersTableHead";
import EngineersTableBody from "../../components/EngineersTableBody";
import Count from "../../components/Count";
import Skeleton from "../../components/Skeleton";

// styles
import "./style.scss";

const DepartmentTable = memo(({ department }) => {
    const { data, count, loading, error } = useFetchEngineers(department);

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
                    <EngineersTableHead />
                    <EngineersTableBody data={data} />
                </Table>
            )}
        </div>
    );
});

DepartmentTable.propTypes = {
    department: PropTypes.string.isRequired
};

DepartmentTable.defaultProps = {
    department: ''
}

export default DepartmentTable;
