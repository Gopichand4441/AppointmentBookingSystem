import axios from 'axios';


const PATIENT_API_BASE_URL="http://localhost:8082/addUser";
const PATIENT_API_BASE_URL1="http://localhost:8082/getUserList";
const PATIENT_API_BASE_URL2="http://localhost:8082/deleteUserbyid";
const PATIENT_API_BASE_URL3="http://localhost:8082/update";
const PATIENT_API_BASE_URL4="http://localhost:8082/getUserById";
class UserService{
    saveUser(user){
        return axios.post(PATIENT_API_BASE_URL, user);
    }

    getUsers(){
        return axios.get(PATIENT_API_BASE_URL1);
    }
    deleteUser(id){
        return axios.delete(PATIENT_API_BASE_URL2+"/"+id);
    }
    
    updateUser(patient,id){
        return axios.put(PATIENT_API_BASE_URL3+"/"+id,patient);
    }
    getUser(id) {
        return axios.get(PATIENT_API_BASE_URL4 + "/" + id);
      }
}

export default new UserService()