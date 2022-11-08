import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Navbar } from "./components/Navbar";

import { AddPatient } from "./components/BookAppointment";
import PatientList from "./components/PatientList";
import HomePage from "./components/HomePage";
import UpdatePatient from "./components/UpdatePatient";
//import Footer from "./components/Footer";
import Login from "./components/Login";


function App() {
  return(
  
<>


  <BrowserRouter>
  <Navbar/>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/patientList" element={<PatientList />} />
          <Route path="/addPatient" element={<AddPatient />} />
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/editPatient/:id" element={<UpdatePatient />} />
        </Routes>
        
      </BrowserRouter>
  
  </> 
  );
}

export default App;
