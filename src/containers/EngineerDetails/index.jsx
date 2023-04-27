import { memo } from "react";
import {Grid, Typography} from "@material-ui/core";
import {Bounce} from "react-awesome-reveal";

// profile components
import PersonalInformation from "../../components/PersonalInformation";
import GithubInfo from "../../components/GithubInfo";
import ProjectTimeline from "../ProjectTimeline";

// styles
import "./style.scss";

const EngineerDetails = memo(function({ data }) {
    return <Grid item xs={12} sm={8}>
        <div className={"paper engineer-details"}>
            <div className={"engineer-details-sub-section"}>
                <Bounce triggerOnce direction={"up"} cascade damping={0.1} duration={1000} className={"animation-block-wrapper"}>
                    <Typography variant={"h6"} color={"initial"}>
                        Information
                    </Typography>

                    <Grid container>
                        <PersonalInformation data={data} />
                    </Grid>
                </Bounce>
            </div>
            <div className={"engineer-details-sub-section"}>
                <Bounce triggerOnce direction={"up"} cascade damping={0.1} duration={1000} className={"animation-block-wrapper"}>
                    <Typography variant={"h6"} color={"initial"}>
                        Github
                    </Typography>

                    <Grid container>
                        <GithubInfo githubData={data.github??{}} />
                    </Grid>
                </Bounce>
            </div>
            <div className={"engineer-details-sub-section"}>
                <ProjectTimeline timeline={data?.timeline??[]} projects={data?.projects??[]} />
            </div>
        </div>
    </Grid>
});

EngineerDetails.defaultProps = {
    data: {}
}

export default EngineerDetails;
