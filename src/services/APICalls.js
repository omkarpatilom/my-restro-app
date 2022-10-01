import axios from 'axios';


const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3434',
    'mode': 'no-cors'
}
class APICalls {
    

    deleteItemByID(id) {
        return axios.delete("http://localhost:3434/deleteItemByID/"+id, { headers, mode: 'no-cors', });
    }

    getAllItems() {
        return axios.get("http://localhost:3434/getAllItems", { headers, mode: 'no-cors', });
    }
    getAllVegItems() {
        return axios.get("http://localhost:3434/getAllVegItems", { headers, mode: 'no-cors', });
    }

    getAllNonVegItems() {
        return axios.get("http://localhost:3434/getAllNonVegItems", { headers, mode: 'no-cors', });
    }

    getAllIColdDrinktems() {
        return axios.get("http://localhost:3434/getAllIColdDrinktems", { headers, mode: 'no-cors', });
    }

    createOrder(employee) {
        console.log(employee);
        return axios.post("http://localhost:3434/createOrder", employee, { headers, mode: 'no-cors', });
    }

    getAllOrdersByCusID(employeeId) {
        console.log(employeeId);
        return axios.get("http://localhost:3434/getAllOrdersByCusID/" + employeeId, { headers, mode: 'no-cors', });
    }

    getAllOrders() {
        return axios.get("http://localhost:3434/getAllOrders", { headers, mode: 'no-cors', });
    }

    getAllPaidUnpaidOrders() {
        return axios.get("http://localhost:3434/getAllOrders", { headers, mode: 'no-cors', });
    }

    login(employee) {
        console.log('===>', employee);
        return axios.post("http://localhost:3434/login", employee, { headers, mode: 'no-cors', });
    }


    payNow(id) {
        return axios.get("http://localhost:3434/payNow/" + id, { headers, mode: 'no-cors', });
    }

    createFeedback(employee) {
        console.log(employee);
        return axios.post("http://localhost:3434/createFeedback", employee, { headers, mode: 'no-cors', });
    }

    createItem(employee) {
        console.log(employee);
        return axios.post("http://localhost:3434/createItem", employee, { headers, mode: 'no-cors', });
    }

    getItemsByID(itemID) {
     
        return axios.get("http://localhost:3434/getItemsByID/" + itemID, { headers, mode: 'no-cors', });
    }

    updateItem(employee) {
        console.log(employee);
        return axios.post("http://localhost:3434/updateItem", employee, { headers, mode: 'no-cors', });
    }
    createCustomerDetails(employee) {
        console.log(employee);
        return axios.post("http://localhost:3434/createCustomerDetails", employee, { headers, mode: 'no-cors', });
    }
    

    getAllFeedbacks() {
        return axios.get("http://localhost:3434/getAllFeedbacks", { headers, mode: 'no-cors', });
    }

}

export default new APICalls()