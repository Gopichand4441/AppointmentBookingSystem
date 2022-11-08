import React from 'react'
import { useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
    <div className="px-8 py-8">

      <div className="font-thin text-2xl tracking-wider bg-gray-800 px-8 flex items-center h-16">
      <h1 className="text-center text-white font-bold mx-auto">SignIn</h1>
      </div>
     
      <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Username</label>
            <input type="text" name="patientName"  
                    className="h-8 w-96 border mt-2 px-2 py-2 "></input>
    </div>
    
    <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Password</label>
            <input type="password" name="patientAddress"  
                      
                                      className="h-8 w-96 border mt-2 px-2 py-2 "></input>
    </div>


              <div className="items-center justify-center h-14 w-full my-4">
                      <button className="rounded text-black font-semibold
                                bg-green-400 border mt-2 px-6 py-2 hover:bg-green-500"
                                >Login</button>
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

export default Login