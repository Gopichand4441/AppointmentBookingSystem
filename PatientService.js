import axios from 'axios';


const PATIENT_API_BASE_URL="http://localhost:8081/addPatient";
const PATIENT_API_BASE_URL1="http://localhost:8081/getPatientList";
const PATIENT_API_BASE_URL2="http://localhost:8081/deletepatientbyid";
const PATIENT_API_BASE_URL3="http://localhost:8081/update";
const PATIENT_API_BASE_URL4="http://localhost:8081/getPatientById";
class PatientService{

    savePatient(patient){
        return axios.post(PATIENT_API_BASE_URL, patient);
    }

    getPatients(){
        return axios.get(PATIENT_API_BASE_URL1);
    }
    deletePatient(id){
        return axios.delete(PATIENT_API_BASE_URL2+"/"+id);
    }
    
    updatePatient(patient,id){
        return axios.put(PATIENT_API_BASE_URL3+"/"+id,patient);
    }
    getPatient(id) {
        return axios.get(PATIENT_API_BASE_URL4 + "/" + id);
      }
}

export default new PatientService()