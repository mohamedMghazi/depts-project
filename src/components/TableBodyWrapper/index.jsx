import PropTypes from "prop-types";
import {TableBody} from "@material-ui/core";
import TableRowWrapper from "./TableRowWrapper";

export default function TableBodyWrapper({ data })
{
    return <TableBody>
        {data.map(engineer => {
            const rowKey = engineer.name.replace(' ', '');
            return <TableRowWrapper engineerData={engineer} key={rowKey} />
        })}
    </TableBody>
}

TableBodyWrapper.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};
