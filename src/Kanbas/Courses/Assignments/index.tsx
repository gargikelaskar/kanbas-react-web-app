import {useEffect, useState} from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { useNavigate, Link, useParams } from "react-router-dom";
import './index.css'
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignment, setAssignments } from "./reducer";
import { KanbasState } from "../../store";
import Modal from 'react-bootstrap/Modal';
import * as client from './client';

function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();

  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  
  const dispatch = useDispatch();

  const fetchAssigments = async(cid?:string) => {
    const assignments = await client.fetchAssignmentsForCourse(cid)
    dispatch(setAssignments(assignments))
  }

  const handleDeleteAssignment = (assignmentId: string) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  }
  
  const [deleteModal, setDeleteModal] = useState(false);
  
  var newId = new Date().getTime().toString(); 
  const newAssignment = () => {
    dispatch(setAssignment([]));
    navigate(`/Kanbas/Courses/${cid}/Assignments/${newId}`)
  }

  const handleDelete = () => {
    handleDeleteAssignment(assignment._id);
    setDeleteModal(false);
  }

  useEffect(() => {
    fetchAssigments(cid);
  }, [cid])
  
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <input className="form-control" style={{width: "20%"}} placeholder="Search for Assignments"/>
        <div className="d-flex">
            <button className="btn btn-light align-items-center me-2" style={{marginRight: "20px"}}>
                Group</button>
            <button className="addAssiBtn" onClick={newAssignment} >
                +Assignment</button>
            <select className="form-select">
                <option selected>Edit Assignment Dates</option> 
                <option>Edit Assignment Info</option>
            </select>
        </div>
      </div>

      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <button className="badge rounded-pill bg-light text-dark p-2">40% of Total</button>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item align-items-between">
                <div className="d-flex">
                  <div style={{ alignSelf: "center" }}>
                    <FaEllipsisV className="me-2" />
                  </div>
                  <div className="text-secondary p-1">
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <small>
                      {assignment.description} | Due {assignment.dueDate} | {assignment.points} pts
                    </small>
                  </div>
                  <div className="ms-auto" style={{ alignSelf: "center" }}>
                    <span>
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                    <a style={{cursor:"pointer"}} onClick={() => {dispatch(setAssignment(assignment)); setDeleteModal(true)}}>
                    <span className="ms-2 delBtn">
                          Delete
                        </span>
                      </a>
                  </div>
                </div>
              </li>))}
          </ul>
          {deleteModal && (
            <Modal 
            show={deleteModal}
            backdrop="static"
            onHide={()=> {setDeleteModal(false);}}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title className="modalHeading">Confirm deletion of assignment?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container align-items-center">
                <div >Please confirm that you want to delete this assignment: 
                  <br/>ID: {assignment._id}<br/> TITLE: {assignment.title}</div>
                <hr/>
                <div className="wd-modules-buttons d-flex justify-content-around m-2">
                  <button className="btn btn-secondary m-2 w-100" onClick={() => setDeleteModal(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-outline-danger m-2 w-100" onClick={handleDelete}>
                    Delete 
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          )}
        </li>
      </ul>
    </div>
);}
export default Assignments;