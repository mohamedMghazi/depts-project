import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {getEngineerData} from "../../utils/redux/services/engineers/actions";
import Skeleton from "../../components/Skeleton";
import {Grid} from "@material-ui/core";
import BreadCrumb from "../../components/BreadCrumb";
import EngineerCard from "../../containers/EngineerCard";
import EngineerDetails from "../../containers/EngineerDetails";
import "./style.scss";

export default function EngineerProfile()
{
    const { dept, engineer } = useParams();
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector(state => state.engineers.engineerData);
    console.log(data)
    const getEngineersData = useCallback(() => {
        dispatch(getEngineerData(dept, engineer));
    }, [dispatch, dept, engineer]);

    useEffect(() => {
        document.body.style.background = '#F8F8F8';

        getEngineersData();
    }, [getEngineersData]);

    if (loading) {
        return <Skeleton />
    }

    if (error) {
        return <div>Oops, something went wrong. Please try again later.</div>;
    }

    return <div id="engineers-profile-wrapper">
        <BreadCrumb engineer={engineer} dept={dept} />

        <Grid container spacing={0} className={"engineer-profile"}>
            <EngineerCard image={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"} name={data?.name??""} age={data?.age??0} location={data?.github?.location??""} />
            <EngineerDetails data={data} />
        </Grid>
    </div>
}
