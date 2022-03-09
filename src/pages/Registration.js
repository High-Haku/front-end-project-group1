import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";
import './Log.css'
import {Link} from "react-router-dom";

function Registration() {
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
const [user, setUser] = useState({
  name: '',
  email: '',
  password: '',

})


const [flag, setFlag] = useState(false);
const [login, setLogin] = useState(true);



function handleFormSubmit(e) {
    e.preventDefault();

    localStorage.setItem('user', JSON.stringify(user))
    
  //   if (!name || !email || !password) {
  //   setFlag(true);
  //   } else {
  //   setFlag(false);
  //   localStorage.setItem("ReyEmail", JSON.stringify(email));
  //   localStorage.setItem(
  //       "ReyPassword",
  //       JSON.stringify(password)
  //     );
  //     console.log("Saved in Local Storage");

  //     setLogin(!login);
  //   }
  }

  function handleClick() {
    setLogin(!login);
  }


  

  return (
    <>

        <div className="outer mt-5  ">
          <div className="inner">
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                <label>Nama</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukan nama anda"
                  name="name"
                  onChange={(event) => setUser({...user,name:event.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Masukan email anda"
                  onChange={(event) => setUser({...user,email:event.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukan password anda"
                  onChange={(event) => setUser({...user,password:event.target.value})}
                />
              </div>

              

              
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Register
              </button>
              
              <Link to="/login">sudah punya akun? click sini?</Link>
              
              {flag && (
                <Alert color="primary" variant="danger">
                  Semua form harus di isi.
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
        </div>

    
    </>
  );
}

export default Registration
