import PropTypes from "prop-types";
import {TableBody} from "@material-ui/core";
import EngineersTableRow from "../EngineersTableRow";

export default function EngineersTableBody({ data })
{
    return <TableBody>
        {data.map(engineer => {
            const rowKey = engineer.name.replace(' ', '');
            return <EngineersTableRow engineerData={engineer} key={rowKey} />
        })}
    </TableBody>
}

EngineersTableBody.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

EngineersTableBody.defaultProps = {
    data: [],
};
