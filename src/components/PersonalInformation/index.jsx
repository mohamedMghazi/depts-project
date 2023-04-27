import {Grid} from "@material-ui/core";
import PropTypes from "prop-types";

export default function PersonalInformation({ data }) {
    const MAIN_INFORMATION = ["name", "age", "department", "gender"];

    return MAIN_INFORMATION.map(info => (
        data[info] && <Grid key={info} item xs={12} sm={6} md={6} lg={6} xl={6}>
            <h4>{info}:</h4>
            <span>{data[info]}</span>
        </Grid>
    ))
}

PersonalInformation.prototype = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        gender: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
    })
}

PersonalInformation.defaultProps = {
    data: {}
}
