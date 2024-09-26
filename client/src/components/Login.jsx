import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setReady, setUser } from "../redux/slices/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post("api/v1/login", {
        email,
        password,
      });

      const userData = response.data.user;

      dispatch(setUser(userData));
      dispatch(setReady({ ready: true }));
      alert("Successfully Logged in");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("ERROR OCCURED");
    }
  };
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto " onSubmit={submitHandler}>
          <input
            type="email"
            placeholder={"123@email.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder={"Enter your password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary p-2 w-full text-white rounded-2xl">
            Login
          </button>
          <div className="text-center text-gray-500 py-2">
            Don't have an account yet?{" "}
            <Link to={"/register"} className="underline text-black">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
