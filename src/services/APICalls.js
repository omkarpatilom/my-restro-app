import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:3434/getAllItems";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3434',
    'mode': 'no-cors'
}
class APICalls {

    getAllItems(){
        return axios.get("http://localhost:3434/getAllItems",{ headers, mode: 'no-cors', });
    }
    getAllVegItems(){
        return axios.get("http://localhost:3434/getAllVegItems",{ headers, mode: 'no-cors', });
    }

    getAllNonVegItems(){
        return axios.get("http://localhost:3434/getAllNonVegItems",{ headers, mode: 'no-cors', });
    }

    getAllIColdDrinktems(){
        return axios.get("http://localhost:3434/getAllIColdDrinktems",{ headers, mode: 'no-cors', });
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new APICalls()