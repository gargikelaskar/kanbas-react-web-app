import React, { useEffect, useState } from "react";
import * as client from "./client";
import { useNavigate, Link } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  
  const navigate = useNavigate();
  
  const fetchProfile = async () => {
    try {
      const profile = await client.profile();
      setProfile(profile);
      console.log("Here is the profile");
      console.log(profile);
    } catch (e) {
      console.log(e);
      alert('No Active User found!');
      navigate("/Kanbas/Account/login");
    }
  };

  const logout = async () => {
    await client.logoutUser();
    navigate("/Kanbas/Account/login");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const saveProfile = async () => {
    const resp = await client.updateUser(profile);
    console.log("Updated profile", resp)
    if (resp){
     alert('Profile Saved') 
    }
  };

  return (
    <div>
      <div className="card mx-auto my-auto text-center" style={{width: "50%"}}>
        <div className="card-body">
        <div className="d-flex justify-content-between">
          <h2 className="card-title">Profile</h2>
          <button className="btn btn-primary m-2 w-25" onClick={saveProfile}>
            Update Profile
          </button>
        </div>
        <Link to="/Kanbas/Account/Admin/Users"
          className="btn btn-warning w-100 m-2">
          View All Users
        </Link>
      {profile && (
          <div>
          <p className="card-text"><b>Hi {profile.firstName}, you can update your profile below:</b></p>
          <label className="col-sm-2 col-form-label">Username:</label>
          <input className="form-control col-sm-10" value={profile.username} onChange={(e) =>
            setProfile({ ...profile, username: e.target.value })}/>
          <label className="col-sm-2 col-form-label">Password:</label>
          <input className="form-control w-100 m-2" value={profile.password} onChange={(e) =>
            setProfile({ ...profile, password: e.target.value })}/>
          <label className="col-sm-2 col-form-label">First Name:</label>
          <input className="form-control w-100 m-2" value={profile.firstName} onChange={(e) =>
            setProfile({ ...profile, firstName: e.target.value })}/>
          <label className="col-sm-2 col-form-label">Last Name:</label>
          <input className="form-control w-100 m-2" value={profile.lastName} onChange={(e) =>
            setProfile({ ...profile, lastName: e.target.value })}/>
          <label className="col-sm-2 col-form-label">Date of birth:</label>
          <input className="form-control w-100 m-2" value={profile.dob} type="date" onChange={(e) =>
            setProfile({ ...profile, dob: e.target.value })}/>
          <label className="col-sm-2 col-form-label">Email:</label>
          <input className="form-control w-100 m-2" value={profile.email} onChange={(e) =>
            setProfile({ ...profile, email: e.target.value })}/>
          
          <select className="form-select w-100 m-2" onChange={(e) =>
              setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-danger w-100 m-2" onClick={logout}>Logout</button>
          </div>
        </div>
      )}
      </div>
      </div>
    </div>
  );
}