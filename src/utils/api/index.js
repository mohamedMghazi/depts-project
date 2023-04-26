import axios from 'axios';

export const fetchEngineersData = async (department) => {
    const response = await axios.get("/db/engineers.json");
    return response.data.filter(engineer => engineer.department.toLowerCase() === department);
};
