import { Navigate, Route, Routes } from "react-router";
import RegisterScreen from "../../Users/register";
import Profile from "../../Users/profile";
import SignIn from "../../Users/login";
import UserTable from "../../Users/table";

export default function Account() {

  return (
    <div className="container-fluid wd-content-fill">
      <h1>Account</h1>
      <div className="container">
        <Routes>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="/Admin/Users" element={<UserTable />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}