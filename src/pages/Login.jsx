import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ loginFunc }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const onsubmit = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      alert("Los campos no deben de estar vacíos")
      return;
    }

    const result = await loginFunc({ username, password })
    if (result) {
      navigate("/")
      setUsername("")
      setPassword("")
    } else {
      alert("Incorrect username or password")
    }
  }
  return (
    <form onSubmit={onsubmit}>
      <Box
        margin={"auto"}
        flexDirection={"column"}
        display={"flex"}
        width={400}
        marginTop={"20px"}
        gap={1}
      >
        <TextField 
          label={"Username"} 
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
          />
        <TextField 
          type="password"
          label={"Password"} 
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />

        <Button type="submit" variant="contained" style={{margin: "10 0"}}>
          Login
        </Button>

      </Box>

      <h6 style={{textAlign: 'center'}}>123 and 123</h6>
    </form>
  )
}

export default Login;