import {Grid} from "@material-ui/core";

export default function GithubInfo({ githubData }) {
    const INFO = ["username", "followers", "following", "lastcontributions"];

    return INFO.map(info => (
        githubData[info] && <Grid key={info} item xs={12} sm={6} md={6} lg={6} xl={6}>
            <h4>{info}:</h4>
            {info === "username" ?
                <a href={githubData["url"]} target={"_blank"} rel={"noreferrer"}>{githubData[info]}</a> :
                <span>{githubData[info]}</span>
            }
        </Grid>
    ))
}
