import { memo } from 'react';
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";

// styles
import "./style.scss";

const EngineerCard = memo(function ({ image, name, age, location }) {
    return <Grid item xs={12} sm={4}>
        <div className={"paper engineer-card"}>
            <div className="engineer-image-wrapper">
                <img src={image} alt={name} />
            </div>

            <h1>{name}</h1>

            <div className="meta-data">
                <h3>{age}</h3>
                {location && " - "}
                {location && <a href={`https://www.google.com/maps/place/${location}`} rel={"noreferrer"} target={"_blank"}>{location}</a>}
            </div>
        </div>
    </Grid>
})

EngineerCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

EngineerCard.defaultProps = {
    image: '',
    name: '',
    age: 0,
    location: ''
}

export default EngineerCard;
