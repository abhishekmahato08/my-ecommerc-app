import React, { useState } from 'react'
import axios from "axios"

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, seterror] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email, password)
    try {
     
      const { data } = await axios.post("/api/users"
        , { username, password, email }
      );
      console.log(data)

      // localStorage.setItem("userInfo",JSON.stringify(data));
    } 
  
  catch (err) {
            seterror(err)
    }
  }

  return (
    <>

      <form onSubmit={submitHandler} >
        <h1>Register</h1>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder='Your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="password"
          name='password'
          placeholder='***********'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">Register</button>


      </form>
    </>
  );
}

export default Register
