import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { getToken, setToken } from "../authenticate/Auth";
function Signin() {
  const url = "https://todo-api-u04q.onrender.com";
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const [ermsg, setErrmsg] = useState("");
  const registerNavigate = useNavigate();
  async function submit(e) {
    e.preventDefault();
    await fetch(`${url}/user/login`, {
      method: "POST",
      body: JSON.stringify(userDetail),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === "Success") {
          setToken("token", data.token);
          alert("Login Successfull");
          registerNavigate("/items");
        } else {
          setErrmsg(data.message);
        }
      });
  }
  return (
    <>
      <div className="SignIn_container">
        <h1>To Do App</h1>
        <h2>Sign In Page</h2>
        <form onSubmit={submit}>
          <input
            id="email_input"
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setErrmsg("");
              setUserDetail({ ...userDetail, email: e.target.value });
            }}
          />
          <input
            id="password_input"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setErrmsg("");
              setUserDetail({ ...userDetail, password: e.target.value });
            }}
          />
          <div className="btn_Container">
            <button id="signin" type="submit">
              Signin
            </button>
            <Link to={"/register"}>
              <button id="register">Register</button>
            </Link>
          </div>
        </form>
        <p id="forgot_pass">Forgot Password ?</p>
        <p className="err_msg">{ermsg ? ermsg : ""}</p>
      </div>
    </>
  );
}
export default Signin;
