import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import Registeration from "./Registration"
import './Log.css'
import {Link} from "react-router-dom"

function Login() {
const [emaillog, setEmaillog] = useState(" ");
const [passwordlog, setPasswordlog] = useState(" ");

const [register, setRegister] = useState(true);

function handleLogin(e) {
    e.preventDefault();

    const user =  JSON.parse(localStorage.getItem("user"));
    console.log(user);

    if (emaillog == user.email && passwordlog == user.password){
        sessionStorage.setItem("isLogin", user.name)
        alert("berhasil masuk")
    } else {
        alert("email atau password yang anda masukan salah")
    }
}

function handleClick() {
    setRegister(!register);
}



return (
    <div className="outer mt-5">
        <div className="inner">
        <form onSubmit={handleLogin}>
        <h3>LogIn</h3>
        <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmaillog(event.target.value)}
            />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPasswordlog(event.target.value)}
            />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
        </button>

        <Link to="/register">Belum punya akun? click disini</Link>


            </form>
        </div>
    </div>
);
}

export default Login;