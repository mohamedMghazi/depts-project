import {Grid} from "@material-ui/core";

export default function MainInfo({ data }) {
    const MAIN_INFORMATION = ["name", "age", "department", "gender"];

    return MAIN_INFORMATION.map(info => (
        <Grid key={info} item xs={12} sm={6} md={6} lg={6} xl={6}>
            <h4>{info}:</h4>
            <span>{data[info]}</span>
        </Grid>
    ))
}
