import {useState} from "react";
import {Tab, Tabs} from "@material-ui/core";
import DepartmentTable from "../../containers/DepartmentTable";
import "./style.scss";

const departments = ["umbra", "evastel", "microsoft", "ookla"];

export default function Departments()
{
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <div id="departments-page-wrapper">
        <Tabs value={value} onChange={handleChange} id={"tabs-wrapper"}>
            {departments.map((department) => (
                <Tab key={department} label={department} />
            ))}
        </Tabs>

        <DepartmentTable department={departments[value]} />
    </div>
}
