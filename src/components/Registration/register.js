import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { getToken, setToken } from "../authenticate/Auth";
function Register() {
  const url = "https://todo-api-u04q.onrender.com";
  const [regermsg, setregErrmsg] = useState("");
  const [userRegDetail, setUserRegDetail] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const registerNavigate = useNavigate();
  async function submit(e) {
    e.preventDefault();
    await fetch(`${url}/user/register`, {
      method: "POST",
      body: JSON.stringify(userRegDetail),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === "Success") {
          alert("Registeration Successfull");
          registerNavigate("/");
        } else {
          setregErrmsg(data.message);
        }
      });
  }
  return (
    <>
      <div className="Register_container">
        <h1>To Do App</h1>
        <h3>Registeration In Page</h3>
        <form onSubmit={submit}>
          <input
            id="name_input"
            name="name"
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setregErrmsg("");
              setUserRegDetail({ ...userRegDetail, name: e.target.value });
            }}
          />
          <input
            id="email_input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setregErrmsg("");
              setUserRegDetail({ ...userRegDetail, email: e.target.value });
            }}
          />
          <input
            id="password_input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setregErrmsg("");
              setUserRegDetail({ ...userRegDetail, password: e.target.value });
            }}
          />{" "}
          <input
            id="Cpassword_input"
            name="cpassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setregErrmsg("");
              setUserRegDetail({ ...userRegDetail, password: e.target.value });
            }}
          />
          <div className="btn_Container">
            <button id="signin" type="submit">
              Register
            </button>
            <Link to={"/"}>
              <button id="register">Signin</button>
            </Link>
          </div>
        </form>
        <div className="err_container">
          <p id={regermsg ? "err_msg" : ""}>{regermsg ? regermsg : ""} </p>
        </div>
      </div>
    </>
  );
}
export default Register;
