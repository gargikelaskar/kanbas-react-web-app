import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as client from "./client";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const register = async () => {
    try {
      const newUser = await client.registerUser(user);
      console.log(newUser);
      navigate("/Kanbas/Account/profile");
    } catch (e:any) {
      console.log(e);
      setError(e.response.data.message);
      alert('Username already exists') 
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <div className="alert alert-danger mb-2 mt-2"> {error}</div>}
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="form-control"
        placeholder="Username"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="form-control mt-2"
        placeholder="Password"
        type={"password"}
      />
      <button onClick={register} className="btn btn-primary mt-2">
        Register
      </button>
      <Link to="/Kanbas/Account/login" className="btn btn-link mt-2">
        Login
      </Link>
    </div>
  );
}