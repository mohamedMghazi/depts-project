import {memo} from "react";
import PropTypes from "prop-types";
import {Grid, Typography} from "@material-ui/core";

// components
import Chart from "../../components/Chart";

// styles
import "./style.scss";

const ProjectTimeline = memo(function ({ projects, timeline }){
    return <Grid container className={"project-timeline-container"} spacing={2}>
        <Grid item xs={12} lg={6}>
            <Typography variant={"h6"} color={"initial"}>
                Projects
            </Typography>

            <Chart type={"Doughnut"} data={projects??[]} chartName={"Projects Overview"} label={"name"} val={"rank"} />
        </Grid>

        <Grid item xs={12} lg={6}>
            <Typography variant={"h6"} color={"initial"}>
                Timeline
            </Typography>

            <Chart type={"Doughnut"} data={timeline??[]} chartName={"Timeline Overview"} label={"data"} val={"kpi"} />
        </Grid>
    </Grid>
})

ProjectTimeline.prototype = PropTypes.shape({
    projects: PropTypes.arrayOf(PropTypes.object),
    timeline: PropTypes.arrayOf(PropTypes.object)
})

ProjectTimeline.defaultProps = {
    projects: [],
    timeline: []
}

export default ProjectTimeline;
