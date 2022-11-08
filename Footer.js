import React from 'react'
import { MDBFooter, MDBIcon,/*MDBContainer, MDBRow, MDBCol*/ } from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
//import "bootstrap-css-only/css/bootstrap.min.css";
//import "mdbreact/dist/css/mdb.css";
const Footer = () => {
  return (

    <MDBFooter bgColor='light' className="text-lg-start text-muted ">
      <div className="grid-flow-row">
       <div className="grid-cols-4 px-8 flex items-center bg-gray-800 flex-row text-white font-bold h-100 space-x-28">
            
            <div classname="space-x-30">
            <div className="h-20 px-10 py-3 inline-flex space-x-5">
            <a href ="http://localhost:3000/">
              <img src="https://balcomedicalcentre.com/package/images/footer-logo.png" alt="Logo"></img>
            </a>
            <a href ="http://localhost:3000/">
              <img src="https://balcomedicalcentre.com/package/images/nabh.png" alt="Logo"></img>
            </a>
            <a href ="http://localhost:3000/">
              <img src="https://balcomedicalcentre.com/package/images/IGBC_gold.png" alt="Logo"></img>
            </a>
          </div>
              <div>
                  <h3>A Premier Cancer Hospital</h3>
              </div>
              <div className="font-light"><p>Balco Medical Centre, Vedanta Medical Research Foundation </p>
               <p>Sector 36,Atal Nagar, PO: Uparwara, Raipur, Chhattisgarh 493661</p></div>
               </div>
            <div className="text-bold space-x-30">
              <h3>Pages</h3>
              <div>
                  <ul className=" text-white font-light" >
                      <li className="nav-item active">
                          <a className href="#home">Home
                            </a>
                      </li>
                      <li className="nav-item active">
                        <a className href="#home">About Us
                         </a>
                      </li>
                      <li className="nav-item active">
                          <a className="nav-link" href="#home">Specialities
                        </a>
                      </li>
                      <li className="nav-item active">
                          <a className="nav-link" href="#home">Doctors
                        </a>
                      </li>
                      <li className="nav-item active">
                          <a className="nav-link" href="#home">Facilities
                            </a>
                      </li>
                      <li className="nav-item active">
                          <a className="nav-link" href="#home">Academics
                            </a>
                      </li>
                      <li className="nav-item active">
                            <a className="nav-link" href="#home">Health Library
                          </a>
                        </li>
          
                    </ul>
            </div>
          </div>

          <div className="text-bold">
          <h3>Links</h3>
          <div>
          <ul className=" text-white font-light" >

          <li className="nav-item active">
            <a className="nav-link  " href="#home">Appointment
            </a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#home">Testimonials
            </a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#home">Contact Us
            </a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#home">Vedanta Resources
            </a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#home">BMC Compilances
            </a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#home">Gate Pass
            </a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#home">Photo Gallery
            </a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#home">Press Release
            </a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#home">Recruitment Disclaimer
            </a>
            </li>
            </ul>
            </div>

          </div>

          <div className="text-bold">
          <h3>Contacts</h3>
          <div>
          <ul className=" text-white font-light" >

          <li className="nav-item active">
          <MDBIcon icon="phone" className="me-2" />
                0771-2237575
            </li>
            <li className="nav-item active">
            <p><MDBIcon icon="phone" className="me-3" />  +91 8282823333</p>
            </li>
            <li className="nav-item active">
            <p><MDBIcon icon="phone" className="me-3" />  +91 8282824444</p>
            </li>
            <li className="nav-item active">
            <p><MDBIcon icon="envelope" className="me-3" />info.vmrf@vedanta.co.in</p>
            </li>
            <li className="nav-item active">
            <p>
              <MDBIcon icon="envelope" className="me-3" />careers.vmrf@vedanta.co.in</p>
            </li>
            
            </ul>
            </div>

          </div>
          
          <div>
            <h3>Location</h3><br></br>
            <iframe title="This is a unique title" src=
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7342792759455!2d81.77230681493425!3d21.123157385947298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c5d79c434733%3A0xbd32ce58666699fa!2sBALCO%20Medical%20Centre%20-Best%20Cancer%20hospital%20in%20Raipur%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1652335138784!5m2!1sen!2sin" 
            className="border-2 border-solid rounded-md h-25 w-22" >
                                </iframe>
            </div>
     
          
        </div>
        <div className="bg-green-500">
       Copyright ©2022 Balco Medical Centre
      </div></div>
    </MDBFooter>
    
    )
}

export default Footer