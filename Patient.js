import React from 'react'
import { useNavigate} from "react-router-dom";

export const Patient = (patient,deletePatient) => {

  
    const navigate = useNavigate();
    const editPatient = (e, id) => {
      e.preventDefault();
      navigate(`/editPatient/${id}`);
    };


  return (
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
                     className="text-indigo-600 hover:text-indigo-800 px-4"
                     >
                      Edit</button>
                     <button 
                     onClick={(e,id) => deletePatient(e,patient.patientId)}
                     className="text-indigo-600 hover:text-indigo-800">Delete</button>
                </td>
              </tr>
  )
}
