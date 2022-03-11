import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "./Log.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginInit } from "../redux/actions/UserAction";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //const [register, setRegister] = useState(true);

  function handleLogin(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(
      (u) => u.email == emaillog && u.password == passwordlog
    );

    if (user) {
      sessionStorage.setItem("loginUser", JSON.stringify(user));
      alert("berhasil masuk");
      dispatch(userLoginInit(user));
      navigate("/");
    } else {
      setFlag(true);
      setInterval(() => {
        setFlag(false);
      }, 2000);
    }
  }

  return (
    <div className="outer mt-5">
      <div className="inner">
        <form onSubmit={handleLogin}>
          <h3> LogIn </h3>{" "}
          <div className="form-group">
            <label> Email </label>{" "}
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={(event) => setEmaillog(event.target.value)}
            />{" "}
          </div>
          <div className="form-group">
            <label> Password </label>{" "}
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
              onChange={(event) => setPasswordlog(event.target.value)}
            />{" "}
          </div>
          <button type="submit" className="btn btn-dark btn-block mt-3 me-2">
            Login{" "}
          </button>
          <Link to="/register"> Belum punya akun ? klik disini </Link>
          {flag ? (
            <Alert color="primary" variant="danger" className="mt-3">
              Password atau Email yang anda masukan salah!
            </Alert>
          ) : (
            ""
          )}{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}

export default Login;
