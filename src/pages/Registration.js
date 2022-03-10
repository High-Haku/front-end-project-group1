import React, { useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import "./Log.css";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password:'',
    email: "",
    phone: "",
    address: "",
    myLibrary: [],
    purchaseHistory: []
  });

  const [flag, setFlag] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();

    let newUsers = JSON.parse(localStorage.getItem('users')) || [];
    if(!newUsers.find(u => u.email == user.email)) {
      newUsers = [...newUsers, user]
      localStorage.setItem("users", JSON.stringify(newUsers));
      alert('Registrasi Berhasil !');
      navigate('/login');
    } else {
      alert("Email sudah terdaftar!")
    }
  }

  useEffect(() => {
      setInterval(() => {
          setFlag(false)
      },4000)
  },[flag])

  return (
    <>
      <div className="outer mt-5  ">
        <div className="inner">
          {" "}
          <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Nama</label>
              <input
                type="text"
                className="form-control"
                placeholder="Masukan nama anda"
                name="name"
                required
                onChange={(event) =>
                  setUser({ ...user, name: event.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Masukan email anda"
                required
                onChange={(event) =>
                  setUser({ ...user, email: event.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Masukan password anda"
                required
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
              />
            </div>

            <button type="submit" className="btn btn-dark btn-block mt-3 me-2" onClick={() => setFlag(true)}>
              Register
            </button>

            <Link to="/login">Sudah punya akun? klik disini!</Link>

              {flag ? <Alert color="primary" variant="danger" className="mt-3">
                Semua form harus di isi.
              </Alert> : ""}
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
