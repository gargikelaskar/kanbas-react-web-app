import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsFillCheckCircleFill, BsPlusCircleFill } from "react-icons/bs";
import { User } from "./client";
import { FaTrashAlt ,FaRegEdit} from "react-icons/fa";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  
  const [user, setUser] = useState<User>({
    _id: "", username: "", password: "", firstName: "",
    lastName: "", role: "USER" });
  
  const [role, setRole] = useState("USER");
  
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  const selectUser = async (user: User) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) =>
        (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  }

  const fetchUsers = async () => {
    const users = await client.fetchAllUsers();
    setUsers(users);
  };

  const fetchUsersByRole = async (role: string) => {
    console.log("Role type filter");
    const users = await client.findUsersByRole(role);
    setRole(role);
    setUsers(users);
  };


  useEffect(() => { fetchUsers(); }, []);

  return (
    <div>
        <div className="d-flex justify-content-between">
            <h1>User List</h1>
            <select
                onChange={(e) => fetchUsersByRole(e.target.value)}
                value={role || "USER"}
                className="form-select w-25 float-end"
            >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
        </div>

      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>&nbsp;</th>
          </tr>
          <tr>
            <td>
                <div className="d-flex">
                    <input className="form-control m-2" value={user.username} onChange={(e) =>
                        setUser({ ...user, username: e.target.value })}/>
                    <input className="form-control m-2" value={user.password} onChange={(e) =>
                        setUser({ ...user, password: e.target.value })}/>
                </div>
            </td>
            <td>
              <input className="form-control m-2" value={user.firstName} onChange={(e) =>
                setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input className="form-control m-2" value={user.lastName} onChange={(e) =>
                setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select className="form-select m-2" value={user.role} onChange={(e) =>
                setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="text-nowrap" style={{verticalAlign: "middle"}}>
                <BsFillCheckCircleFill
                    onClick={updateUser}
                    className="me-2 text-success fs-1 text" size={25}
                />
                <a style={{cursor:"pointer"}} onClick={createUser}><BsPlusCircleFill className="text-success ms-2" size={25} /></a>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <td style={{verticalAlign: "middle"}}>
                <a style={{cursor:"pointer"}} onClick={() => deleteUser(user)}><FaTrashAlt className="text-danger me-2" size={25} /></a>
                <button className="btn btn-warning me-2">
                    <FaRegEdit onClick={() => selectUser(user)} />
                </button>
            </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}