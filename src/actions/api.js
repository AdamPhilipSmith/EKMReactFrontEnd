import { axios } from "axios";

const baseUrl = "http://localhost:55609/api/"

export default {

    employee(url = baseUrl + 'Employee/'){
        return {
            fetchAll : () => axios.get(url),
            //might need to change id
            fetchById :id => axios.get(url+id),
            create : newRecord => axios.post(url,newRecord),
            //might need to change id
            update : (id, updateRecord) => axios.put(url + id, updateRecord),
            //might need to change id
            delete: id => axios.delete(url + id) 
        }
    }
}