import { memo } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from "@material-ui/core";

const TableRowWrapper = memo(({ engineerData }) => {
    const { name, phone, age } = engineerData;
    const formattedPhone = typeof phone === "object" ? phone.cell : phone;

    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{formattedPhone}</TableCell>
            <TableCell>{age}</TableCell>
        </TableRow>
    );
})

TableRowWrapper.propTypes = {
    engineerData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.shape({
                cell: PropTypes.string.isRequired,
                home: PropTypes.string
            }).isRequired,
        ]),
        age: PropTypes.number.isRequired,
    }).isRequired,
};

export default TableRowWrapper;
