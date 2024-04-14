import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as client from "./client";

export default function SignIn() {
  const [credentials, setCredentials] = useState<any>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      const existingUser = await client.loginUser(credentials);
      console.log(existingUser);
      navigate("/Kanbas/Account/profile");
    } catch (e) {
      console.log(e);
      alert('Invalid credentials') 
    }
  };

  return (
    <div>
      <div className="card mx-auto my-auto text-center" style={{width: "50%"}}>
        <div className="card-body">
          
          <h2 className="card-title">Sign into your account</h2>
          <input className="form-control mb-4" value={credentials.username} placeholder="Enter Username" onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })}/>
          <input className="form-control mt-2 mb-4"value={credentials.password} placeholder="Enter Password" onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })} type={"password"}/>
          
          <div className="d-flex justify-content-between">
            <button className="btn btn-success w-50 m-2"onClick={signin}> Sign In </button>
            <Link to="/Kanbas/Account/register" className="btn btn-primary w-50 m-2">
              Register
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}