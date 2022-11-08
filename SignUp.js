import React, { useState } from 'react'
import { useNavigate} from "react-router-dom";
import UserService from './UserService';

const SignUp = () => {
   
    const navigate = useNavigate();
                const [user,setUser] = useState({
                        userid:"",
                        firstname:"",
                        lastname:"",
                        username:"",
                        emailId:"",
                        mobilenumber:"",
                        password:"",
                });
                const handleChange = (e) => {
                        const value = e.target.value;
                        setUser({...user,[e.target.name]: value });
                };
                const saveUser = (e) =>{
                        e.preventDefault();
                        UserService.saveUser(user)
                                .then((response) => {
                                        console.log(response);
                                        navigate("/login")
                                })
                                .catch((error) => {
                                        console.error();
                                });
                };
                const reset = (e) => {
                        e.preventDefault();
                        setUser({
                            userid:"",
                            firstname:"",
                            lastname:"",
                            username:"",
                            emailId:"",
                            mobilenumber:"",
                            password:"",
                        });
                      };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
    <div className="px-8 py-8">

      <div className="font-thin text-2xl tracking-wider bg-gray-800 px-8 flex items-center h-16">
      <h1 className="text-center text-white font-bold mx-auto">Register To SignUp</h1>
      </div>
      <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">First Name</label>
            <input type="text" name="firstname" 
            value={user.firstname}
            onChange={(e)=>handleChange(e)} 
                    className="h-8 w-96 border mt-2 px-2 py-2 "
                    ></input>
    </div>
    <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Last Name</label>
            <input type="text" name="lastname"  
                value={user.lastname}
                onChange={(e)=>handleChange(e)}
                    className="h-8 w-96 border mt-2 px-2 py-2 "
                    ></input>
    </div>
      <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Username</label>
            <input type="text" name="username"  
            value={user.username}
            onChange={(e)=>handleChange(e)}
                    className="h-8 w-96 border mt-2 px-2 py-2 "
                    ></input>
    </div>
    <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Email Id</label>
            <input type="text" name="emailId"
            value={user.emailId}  
                     onChange={(e)=>handleChange(e)}
                                      className="h-8 w-96 border mt-2 px-2 py-2 "
                                      ></input>
    </div>
    <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Mobile Number</label>
            <input type="text" name="mobilenumber"  
                     value={user.mobilenumber}
                     onChange={(e)=>handleChange(e)}
                                      className="h-8 w-96 border mt-2 px-2 py-2 "
                                      ></input>
    </div>
    <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Password</label>
            <input type="password" name="password"  
                      value={user.password}
                      onChange={(e)=>handleChange(e)}
                                      className="h-8 w-96 border mt-2 px-2 py-2 "
                                      ></input>
    </div>

    
              <div className="items-center justify-center h-14 w-full my-4">
                      <button className="rounded text-black font-semibold
                                bg-green-400 border mt-2 px-6 py-2 hover:bg-green-500"
                                onClick={saveUser}
                                >Register</button>
                                <button 
                        onClick={reset}
                        className="rounded text-black font-semibold 
                                  bg-blue-400 border mt-2 px-6 py-2 hover:bg-red-500"
                                  >Clear</button>
                      <button 
                      onClick={() => navigate("/")}
                      className="rounded text-black font-semibold 
                                bg-red-400 border mt-2 px-6 py-2 hover:bg-red-500"
                                
                                >Cancel</button>
              
              </div>
    </div>
    </div>
    )
}

export default SignUp