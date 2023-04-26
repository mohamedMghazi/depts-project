import {useState} from "react";
import {Tab, Tabs} from "@material-ui/core";
import "./style.scss";
import DepartmentTable from "../../containers/DepartmentTable";

export default function Departments()
{
    const [value, setValue] = useState(0);
    const departments = ["Umbra", "Evastel", "Microsoft", "Ookla"];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <div id="departments-page-wrapper">
        <Tabs value={value} onChange={handleChange}>
            {departments.map((department) => <Tab key={department} label={department} />)}
        </Tabs>

        <DepartmentTable department={departments[value]} />
    </div>
}
