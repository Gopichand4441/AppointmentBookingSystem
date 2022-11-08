import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HomePage = () => {
  return (
    
    <div className="py-10">
        <div className="row-span-4">
          <div className="h-20 px-10 py-3 inline-flex space-x-5">
            <a href ="http://localhost:3000/">
              <img src="https://balcomedicalcentre.com/package/images/balco_logo.png" alt="Logo"></img>
            </a>
            <a href ="http://localhost:3000/">
              <img src="https://balcomedicalcentre.com/package/images/nabh.png" alt="Logo"></img>
            </a>
            <a href ="http://localhost:3000/">
              <img src="https://balcomedicalcentre.com/package/images/IGBC_gold.png" alt="Logo"></img>
            </a>
          </div>
            

        </div>
        <div className="collapse navbar-collapse bg-green-400 h-16 px-8 flex items-center" id="navbarNavDropdown">
        <ul className="navbar-nav text-white space-x-10 " >
        <li className="nav-item active inline">
            <a className="nav-link  " href="#home">Home
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="#home">About Us
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="#home">Specialities
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="#home">Doctors
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="#home">Facilities
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="#home">Academics
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="#home">Health Library
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="http://localhost:3000/patientList">Patient Portal
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="http://localhost:3000/addPatient">Doctors Portal
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="http://localhost:3000/register">Register Here
            </a>
            </li>
            <li className="nav-item active inline">
            <a className="nav-link" href="http://localhost:3000/login">Login
            </a>
            </li>
    </ul></div>
    <div >
    <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-100"
                        src="https://balcomedicalcentre.com/uploads/slider/home_Website Banner-01.jpg"
                        alt="slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-100"
                        src="https://balcomedicalcentre.com/uploads/slider/home_Website Banner-02.jpg"
                        alt="slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-100"
                        src="https://balcomedicalcentre.com/uploads/slider/home_Website Banner-03.jpg"
                        alt="slide3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-100"
                        src="https://balcomedicalcentre.com/uploads/slider/home_Website Banner-04.jpg"
                        alt="slide4"
                    />
                </SwiperSlide>
            </Swiper>
    </div>
    <div className="container ">
      <div className="font-bold  px-20 h-16 py-10 items-center text-center">
        <h1>OUR SPECIALITIES</h1>

                <div className="flex items-center py-4 center">
        <div className="flex-grow h-2 bg-blue-900"></div> 

        
        <span className="flex-shrink text-2xl text-gray-500 px-4 italic font-light"><a href ="http://localhost:3000/">
              <img src="https://balcomedicalcentre.com/package/images/logo-11.png" alt="Logo" width="30px"></img>
            </a></span>

        
        <div className="flex-grow h-2  bg-blue-900"></div>
      
      </div></div>

    </div>
    
    <div className="py-20">
    <Swiper
                slidesPerView={5}
                spaceBetween={20}
                
               
                
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    
               
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
              <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/Medical%20Oncology_index_img.jpg"
                        alt="Medical Oncology"
                    />
                    <h4>Medical Oncology</h4>
                </SwiperSlide>
                <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/Surgical%20Oncology_index_img.jpg"
                        alt="Surgical Oncology"
                    />
                    <h4>Surgical Oncology</h4>
                </SwiperSlide>
                <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/Radiation%20Oncology_index_img.jpg"
                        alt="Radiation Oncology"
                    />
                    <h4>Radiation Oncology</h4></SwiperSlide>
                    <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/Pain%20&%20Palliative%20Care_index_img.jpg"
                        alt="Pain & Palliative Care"
                    />
                    <h4>Pain & Palliative Care</h4></SwiperSlide>
                    <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/Nuclear%20Medicine_index_img.jpg"
                        alt="Nuclear Medicine"
                    />
                    <h4>Nuclear Medicine</h4></SwiperSlide>
                    <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/Anesthesia%20&%20Intensive%20Care_index_img.jpg"
                        alt="Anesthesia & Intensive Care"
                    />
                    <h4>Anesthesia & Intensive Care</h4></SwiperSlide>
                    <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/Laboratory%20Services_index_img.jpg"
                        alt="Laboratory Services"
                    />
                    <h4>Laboratory Services</h4>
                </SwiperSlide>
                <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/Radiology_index_img.jpg"
                        alt="Radiology"
                    />
                    <h4>Radiology</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="items-center"
                        src="https://balcomedicalcentre.com/uploads/speciality/Transfusion%20Medicine_index_img.jpg"
                        alt="slide 2"
                    />
                    <h4>Transfusion & Medical Center</h4>
                </SwiperSlide>
                <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/General%20Medicine_index_img.jpg"
                        alt="Internal Medicine"
                    />
                    <h4>Internal Medicine</h4>
                </SwiperSlide>
                <SwiperSlide className="">
                    <img
                        className="object-fill"
                        src="https://balcomedicalcentre.com/uploads/speciality/Haemato%20Oncology_index_img.jpg"
                        alt="Haematology"
                    />
                    <h4>Haematology</h4>
                </SwiperSlide>
            </Swiper>
    </div>

      </div>
    
  )
}

export default HomePage