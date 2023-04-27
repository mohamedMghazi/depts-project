import { memo } from "react";
import {Grid, Typography} from "@material-ui/core";
import "./style.scss";

// profile components
import MainInfo from "../../components/MainInfo";
import GithubInfo from "../../components/GithubInfo";
import ProjectTimeline from "../ProjectTimeline";

const EngineerDetails = memo(function({ data }) {
    return <Grid item xs={12} sm={8}>
        <div className={"paper engineer-details"}>
            <div className={"engineer-details-sub-section"}>
                <Typography variant={"h6"} color={"initial"}>
                    Information
                </Typography>

                <Grid container>
                    <MainInfo data={data} />
                </Grid>
            </div>
            <div className={"engineer-details-sub-section"}>
                <Typography variant={"h6"} color={"initial"}>
                    Github
                </Typography>

                <Grid container>
                    <GithubInfo githubData={data.github??{}} />
                </Grid>
            </div>
            <div className={"engineer-details-sub-section"}>
                <ProjectTimeline timeline={data?.timeline??[]} projects={data?.projects??[]} />
            {/*<Chart chartName={data?.name + " projects"} data={data?.projects} />*/}
            </div>
        </div>
    </Grid>
});

export default EngineerDetails;
