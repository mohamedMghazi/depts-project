import { memo } from "react";
import {Grid} from "@material-ui/core";
import "./style.scss";

const EngineerDetails = memo(function({ data }) {
    return <Grid item xs={12} sm={8}>
        <div className={"paper engineer-details"}>
            <div className={"engineer-details-sub-section"}>
                Details section
            </div>
            <div className={"engineer-details-sub-section"}>
                Github details section
            </div>
            <div className={"engineer-details-sub-section"}>
                Projects section
            {/*<BarChart chartName={data?.name + " projects"} data={data?.projects} />*/}
            </div>
            <div className={"engineer-details-sub-section"}>
                Chart section
            </div>
        </div>
    </Grid>
});

export default EngineerDetails;
