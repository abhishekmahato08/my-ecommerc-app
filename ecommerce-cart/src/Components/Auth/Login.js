import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import "./Login.css"

import axios from "axios"
const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
        // console.log(email, password)

        try {
            const config = {
                headers: {
                  "Content-type": "appliaction/json",
                }
              };
              const { data } = await axios.post("/api/users"
                , {  email,password },
                config
              );
              console.log(data)
        
              localStorage.setItem("userInfo",JSON.stringify(data));
        } catch (error) {
            
        }
    }
    return (
        <>
            <h1>login</h1>
            <form onSubmit={submitHandler} >
                <input
                    type="email"
                    placeholder='enter email'
                    onChange={(e) => setemail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='********'
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button className='btn btn-primary'>Submit</button>
            </form>




        </>
    )
}

export default Login


