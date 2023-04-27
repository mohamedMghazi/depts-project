import {BrowserRouter} from "react-router-dom";
import {Route, Routes, Navigate} from "react-router";
import {Container} from "@material-ui/core";
import Departments from "./pages/Departments";
import EngineerProfile from "./pages/EngineerProfile";

export default function App()
{
    return <Container>
        <BrowserRouter>
            <Routes>
                <Route key={"native_routes"} path="/*" element={<Navigate to="/" replace={true}/>}/>
                <Route path={"/"} element={<Departments />} exact={true} />
                <Route path={"/:dept/:engineer"} element={<EngineerProfile />} exact={true} />
            </Routes>
        </BrowserRouter>
    </Container>
}
