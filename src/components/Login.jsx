import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const Login = () => {
    const[ username ,setusername]= useState("");
   const[password,setpassword]= useState("");

    const navigate = useNavigate();
    function handleLogin(handleLogin) {
        if(username==="sabu" && password==="123"){
        navigate("/home");
    }
    
    }
  return (
    <div>
         <form className="form">
        <input type="text" placeholder="Username" onChange={(e)=>{setusername(e.target.value)}} />
        <input type="password" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}}/>
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
    </div>
  )
}
