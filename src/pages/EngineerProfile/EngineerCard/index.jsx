import { memo } from 'react';
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import "./style.scss";

const EngineerCard = memo(function ({ image = "", name = "" }) {
    return <Grid item xs={12} sm={4}>
        <div className={"paper engineer-card"}>
            <div className="engineer-image-wrapper">
                <img src={image} alt={name} />
            </div>
            <h1>{name}</h1>
        </div>
    </Grid>
})

EngineerCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default EngineerCard;
