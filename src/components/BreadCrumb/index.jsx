import {Breadcrumbs, Link, Typography} from "@material-ui/core";
import "./style.scss";

export default function BreadCrumb({ dept, engineer })
{
    return <Breadcrumbs aria-label="breadcrumb" className={"breadcrumb-wrapper"}>
        <Link underline="hover" color="inherit" href="/">
            Home
        </Link>
        <Typography color="text.primary">{dept}</Typography>
        <Typography color="text.primary">{engineer}</Typography>
    </Breadcrumbs>
}
