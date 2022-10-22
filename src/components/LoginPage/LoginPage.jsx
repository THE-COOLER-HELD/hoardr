import React from 'react'
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate("/home");
    }

  return (
    <div>
        <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default LoginPage