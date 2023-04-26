import {CircularProgress} from "@material-ui/core";
import "./style.scss";

export default function Skeleton()
{
    return <div id="skeleton-wrapper">
        <CircularProgress color="secondary" />
    </div>;
}
