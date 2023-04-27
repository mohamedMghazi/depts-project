import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import useEngineerData from "../../utils/hooks/useFetchEngineerData";

// components
import Skeleton from "../../components/Skeleton";
import BreadCrumb from "../../components/BreadCrumb";
import EngineerCard from "../../containers/EngineerCard";
import EngineerDetails from "../../containers/EngineerDetails";

// styles
import "./style.scss";

function EngineerProfile() {
    const { dept, engineer } = useParams();
    const { data, loading, error } = useEngineerData();

    useEffect(() => {
        document.body.style.background = "#F8F8F8";
    }, []);

    if (loading) {
        return <Skeleton />;
    }

    if (error) {
        return (
            <div>Oops, something went wrong. Please try again later.</div>
        );
    }

    return (
        <div id="engineers-profile-wrapper">
            <BreadCrumb engineer={engineer} dept={dept} />

            <Grid container spacing={0} className={"engineer-profile"}>
                <EngineerCard
                    image={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"}
                    name={data?.name ?? ""}
                    age={data?.age ?? 0}
                    location={data?.github?.location ?? ""}
                />

                <EngineerDetails data={data} />
            </Grid>
        </div>
    );
}

export default EngineerProfile;
