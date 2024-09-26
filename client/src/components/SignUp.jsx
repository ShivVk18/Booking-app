import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/v1/signup", {
        name,
        email,
        password,
      });

      alert("User registered Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("User already exists");
    }
  };
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto " onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="xyz"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </button>
          <div className="text-center text-gray-500 py-2">
            Already a memeber?{" "}
            <Link>
              <button className="underline text-black" onClick={submitHandler}>
                SignUp
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
