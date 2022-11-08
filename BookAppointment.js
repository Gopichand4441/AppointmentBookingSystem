import React, { useState } from 'react'
import PatientService from './PatientService';
import { useNavigate } from "react-router-dom";

export const AddPatient = () => {
        const navigate = useNavigate();
                const [patient,setPatient] = useState({
                        patientId:"",
                        patientName:"",
                        patientEmail:"",
                        patientMobile:"",
                        patientAddress:"",
                        appointmentId:"",
                });
                const handleChange = (e) => {
                        const value = e.target.value;
                        setPatient({...patient,[e.target.name]: value });
                };
                const savePatient = (e) =>{
                        e.preventDefault();
                        PatientService.savePatient(patient)
                                .then((response) => {
                                        console.log(response);
                                        navigate("/patientList")
                                })
                                .catch((error) => {
                                        console.error();
                                });
                };
                const reset = (e) => {
                        e.preventDefault();
                        setPatient({
                                patientId:"",
                                patientName:"",
                                patientEmail:"",
                                patientMobile:"",
                                patientAddress:"",
                                appointmentId:"",
                        });
                      };


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider"></div>
        <h1 className="text-bold">Book Appointment</h1>
        <br></br>
        {/* <div className=" ">
          <form>
          <input type="radio" id="choice1" ></input>
                <label for="choice1"> New Patient </label>

          <input type="radio" id="choice2" ></input>
                <label for="choice2"> Old Patient </label>

          <label className="block text-gray-600 text-sm font-normal">Consultation Type :</label>
                      <select className="h-10 w-96 border mt-2 px-2 py-2 " name="consultation" id="Department">
              <option>Select Consultation Type</option>
              <option value="physical_visit">Physical Visit (Rs 700)</option>
              <option value="teleconsultation">TeleConsultation (Rs 700)</option>
              </select>
          

          </form>
      </div> */}

        <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">Patient Name</label>
              <input type="text" name="patientName"  
                        value={patient.patientName} 
                                onChange={(e) => handleChange(e)}
                                className="h-8 w-96 border mt-2 px-2 py-2 "></input>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">Email Id</label>
              <input type="text" name="patientEmail"  
                        value={patient.patientEmail}  
                                onChange={(e) => handleChange(e)}
                                        className="h-8 w-96 border mt-2 px-2 py-2 "></input>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">Mobile Number</label>
              <input type="text" name="patientMobile"  
                        value={patient.patientMobile} 
                                onChange={(e) => handleChange(e)}
                                        className="h-8 w-96 border mt-2 px-2 py-2 "></input>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">Address</label>
              <input type="text" name="patientAddress"  
                        value={patient.patientAddress} 
                                onChange={(e) => handleChange(e)}
                                        className="h-8 w-96 border mt-2 px-2 py-2 "></input>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">AppointmentId</label>
              <input type="text" 
                name="appointmentId"  
                        value={patient.appointmentId} 
                                 onChange={(e) => handleChange(e)}
                                        className="h-8 w-96 border mt-2 px-2 py-2 "></input>
      </div>
      {/*<div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">Select Appointment Date</label>
              <input type="date" className="h-8 w-96 border mt-2 px-2 py-2 "></input>
</div>*/}
      {/* <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">Department</label>
              <select className="h-15 w-96 border mt-2 px-2 py-2 " name="Department" id="Department">
              <option>Select Department</option>
              <option value="clinical_nutrition">Clinical Nutrition</option>
              <option value="clinical_psychology">Clinical Psychology</option>
              <option value="genral_medicine">General Medicine</option>
              <option value="haemato_oncology">Haemato Oncology</option>
              <option value="medical_oncology">Medical Oncology</option>
              <option value="nuclear_medicine">Nuclear Medicine</option>
              <option value="paediatrics">Paediatrics</option>
              <option value="clinical nutrition">Pain and Palliative care</option>
              <option value="clinical nutrition">Radiation Oncology</option>
              <option value="clinical nutrition">Surgical Oncology</option>
              <option value="clinical nutrition">Transfusion Medicine & Blood Bank Services</option>
              </select>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">Consultant</label>
              <input type="text" className="h-8 w-96 border mt-2 px-2 py-2 "></input>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">Select Appointment Date</label>
              <input type="date" className="h-8 w-96 border mt-2 px-2 py-2 "></input>
      </div>
      
      <div className="items-center justify-center h-14 w-full my-4">
              <label className="block text-gray-600 text-sm font-normal">Message</label>
              <input type="text" className="h-50 w-50 border mt-2 px-2 py-2 "></input>
      </div>*/}
                <div className="items-center justify-center h-14 w-full my-4">
                        <button className="rounded text-black font-semibold
                                  bg-green-400 border mt-2 px-6 py-2 hover:bg-green-500"
                                  onClick={savePatient}>Proceed to Payment</button>
                        <button 
                        onClick={reset}
                        className="rounded text-black font-semibold 
                                  bg-red-400 border mt-2 px-6 py-2 hover:bg-red-500"
                                  >Clear</button>
                
                </div>
      </div>
      </div>

  )
}