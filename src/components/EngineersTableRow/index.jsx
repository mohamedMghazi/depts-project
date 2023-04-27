import { memo } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from "@material-ui/core";
import {Link} from "react-router-dom";
import "./style.scss";

const EngineersTableRow = memo(({ engineerData }) => {
    const { name, phone, age, department } = engineerData;

    return (
        <TableRow>
            <TableCell>
                <Link id={"engineer-name-as-link"} to={`/${department}/${name}`}>{name}</Link>
            </TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>{age}</TableCell>
        </TableRow>
    );
})

EngineersTableRow.propTypes = {
    engineerData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }).isRequired,
};

export default EngineersTableRow;
