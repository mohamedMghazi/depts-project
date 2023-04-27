import {useState} from "react";
import {Tab, Tabs} from "@material-ui/core";

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
        <Tabs value={value} onChange={handleChange} id={"tabs-wrapper"}>
            {DEPARTMENTS.map((department) => (
                <Tab key={department} label={department} />
            ))}
        </Tabs>

        <DepartmentTable department={DEPARTMENTS[value]} />
    </div>
}
