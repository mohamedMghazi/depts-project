import {Breadcrumbs, Link, Typography} from "@material-ui/core";
import "./style.scss";

export default function BreadCrumb({ dept, engineer })
{
    return <Breadcrumbs aria-label="breadcrumb" className={"breadcrumb-wrapper"}>
        <Link underline="hover" color="inherit" href="/">
            Home
        </Link>
        <Typography color={"initial"}>{dept}</Typography>
        <Typography color={"initial"}>{engineer}</Typography>
    </Breadcrumbs>
}
