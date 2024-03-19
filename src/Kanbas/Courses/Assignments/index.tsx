import {
  FaCaretDown,
  FaCheckCircle,
  FaEllipsisV,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignment, selectAssignment } from "./reducer";
import "./index.css";



function Assignments() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();
  
    function addAssignmentEvent() {
        navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`);
    }

      const handleDelAssignment = 
        (assignmentId:string) => {
          const yesState = window.confirm("Do you want to delete this assignment?");
            if(yesState){
                dispatch(deleteAssignment(assignmentId));
            }
        };
        
    return (
      <>
        <div className="d-flex">
          <div className="form-control order-0 w-25 mx-2">
            <input
              type="search"
              id="form1"
              placeholder="Search for Assignment"
              title="Input search item."
            />
          </div>

          <div className="float-end">
            <button type="button" className="btn btn-light btn-outline-dark">
              <FaPlus /> Group
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={addAssignmentEvent}
              id="AddAssignmentBtn"
            >
              <FaPlus /> Assignment
            </button>
            <button type="button" className="btn btn-light btn-outline-dark">
              <FaEllipsisV />
            </button>
          </div>
          <div className="wd-float-done"></div>
        </div>
        <hr />

        <ul className="list-group">
          <li className="list-group-item" draggable="true">
            <div style={{ marginBottom: "15px", cursor: "pointer" }}>
              <RxDotsVertical className="me-2" />
              <FaCaretDown style={{ paddingRight: "5px" }} /> <b className="header">ASSIGNMENTS</b>
              <span className="float-end">
                <span className="wd-percentage-label">100% of Total</span>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle
                  className="ms-2"
                  onClick={addAssignmentEvent}
                  id="PlusAssignmentBtn"
                />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>

            <ul className="list-group">
              {assignmentList
                .filter((assignment) => assignment.course === cid)
                .map((assignment) => (
                  <li
                    key={assignment._id}
                    className="list-group-item wd-assignment"
                    onClick={() => selectAssignment(assignment)}
                    draggable="true"
                  >
                    <RxDotsVertical className="me-2" />
                    <FaRegEdit className="me-2"  />
                    <span className="float-end">
                      <button
                        className="btn btn-danger me-1"
                        style={{ borderRadius: "6px" }}
                        onClick={() => handleDelAssignment(assignment._id)}
                        
                      >
                        Delete
                      </button>
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                    <Link className="text-decoration-none"
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      id="OpenAssignment"
                    >
                      <span className="assiTitle">{assignment.title}</span>
                      <br />
                      <span className="assiDetails">
                        <b>Due: </b>
                        {assignment.dueDate} | {assignment.points} pts
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </>
    );
}
export default Assignments;