import {useState} from "react";
import {Tab, Tabs} from "@material-ui/core";
import {Fade} from "react-awesome-reveal";

// components
import DepartmentTable from "../../containers/DepartmentTable";

// styles
import "./style.scss";

const DEPARTMENTS = ["umbra", "evastel", "microsoft", "ookla"];

export default function Departments()
{
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <div id="departments-page-wrapper">
        <Fade direction={"down"} duration={1100}>
            <Tabs value={value} onChange={handleChange} id={"tabs-wrapper"}>
                {DEPARTMENTS.map((department) => (
                    <Tab key={department} label={department} />
                ))}
            </Tabs>
        </Fade>

        <Fade direction={"up"}>
            <DepartmentTable department={DEPARTMENTS[value]} />
        </Fade>
    </div>
}
