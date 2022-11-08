import PatientService from './PatientService';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [patient, setPatient] = useState(null);

  const editPatient = (e, id) => {
      e.preventDefault();
      navigate(`/editPatient/${id}`);
    };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await PatientService.getPatients();
        setPatient(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  const deletePatient = (e,id) => {
    e.preventDefault();
    PatientService.deletePatient(id)
                                .then((response) => {
                                  
                                  if (patient) {
                                    setPatient((prevElement) => {
                                      
                                      return prevElement.filter((patient) => patient.id !== id);
                                      
                                    });
                                    window.location.reload(false);
                                  }
                                        
                                });
  }

  
  
  return (

    <div className="container mx-auto my-8">
      <h1 className="text-bold text-center">List of Appointments</h1>
    <div className="h-12 inline-flex space-x-5">
    

      <button 
      onClick={() => navigate("/")}
      className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Home Page</button>
      <button 
      onClick={() => navigate("/addPatient")}
      className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Add Patient</button>
    </div>
    <div className="flex shadow border-b">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Patient Name</th>
            <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Patient Email Id</th>
            <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Patient Mobile Number</th>
            <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Patient Address</th>
            <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Appointment Id</th>
            <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Actions</th>
          </tr>
        </thead>
        {!loading && (
        <tbody className="bg-white">
              {patient.map((patient)=> (
                <tr key={patient.patientId}>
                 <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{patient.patientName}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{patient.patientEmail}</div>
                </td>
               <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{patient.patientMobile}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{patient.patientAddress}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                 <div className="text-sm text-gray-500">{patient.appointmentId}</div>
                </td>

               <td>
               <button 
                     onClick={(e, id) => editPatient(e, patient.patientId)}
                     className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
                     >
                      Edit</button>
                     <button
                     onClick={(e,id) => deletePatient(e,patient.patientId)}
                     className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                    Delete</button>
                </td>
              </tr>
          ))}
        </tbody>)}
      </table>
    </div>
    </div>
  )
}

export default PatientList