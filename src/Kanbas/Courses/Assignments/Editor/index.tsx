import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { cid } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment?.title} className="form-control mb-2" />

      <br />

      <div className="form-group">
        <textarea className="form-control" id="assignmentDescription">
          This assignment describes how to install the development environment
          for creating and working with Web applications we will be developing
          this semester. We will add new content every week, pushing the code to
          a GitHub source repository, and then deploying the content to a remote
          server hosted on Netlify.
        </textarea>
      </div>
      <br />

      <div className="row">
        <div className="col-md-4 text-end">
          <label className="mx-3">Points</label>
        </div>
        <div className="col-md-8">
          <input type="number" className="form-control" value="100" />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-4 text-end">
          <label className="mx-3">Assignment Group</label>
        </div>
        <div className="col-md-8">
          <select className="form-control">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
          </select>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-4 text-end">
          <label>Display Grade as</label>
        </div>
        <div className="col-md-8">
          <select className="form-control">
            <option>Percentage</option>
            <option>Marks</option>
          </select>
          <br />
          <input type="checkbox" id="count_final_grade" />
          <label>Do not count this assignment towards the final grade</label>
        </div>
      </div>

      <br />

      <div className="row ">
        <div className="col-md-4 text-end">
          <label>Submission Type</label>
        </div>
        <div className="col-md-8">
          <div className="border p-2">
            <select className="form-control">
              <option>Online</option>
              <option>Offline</option>
            </select>
            <br />
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" id="options1" />
            <label>Text Entry</label>
            <br />
            <input type="checkbox" id="options2" />
            <label>Website URL</label>
            <br />
            <input type="checkbox" id="options3" />
            <label>Media Recordings</label>
            <br />
            <input type="checkbox" id="options4" />
            <label>Student Annotation</label>
            <br />
            <input type="checkbox" id="options5" />
            <label>File Uploads</label>

            <br />
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-4 text-end">
          <label>Assign</label>
        </div>
        <div className="col-md-8">
          <div className="border p-2">
            <label>
              <b>Assign to</b>
            </label>
            <br />
            <input className="form-control" value="Everyone" />
            <br />

            <label>
              <b>Due</b>
            </label>
            <input className="form-control" type="date" />
            <br />

            <div className="row">
              <div className="col-md-6">
                <label>
                  <b>Available from</b>
                </label>
                <input className="form-control w-30" type="date" />
              </div>

              <div className="col-md-6">
                <label>
                  <b>Until</b>
                </label>
                <input className="form-control w-30" type="date" />
              </div>
            </div>
            <br />

            <button className="btn rounded-0 addButton">+ Add</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div>
          <input type="checkbox" id="notify_users" />
          <label>Notify users that this content has changed</label>
          <br />
        </div>
        <div className="ms-auto">
          <button
            onClick={handleSave}
            className="btn btn-success ms-2 float-end"
          >
            Save
          </button>
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            className="btn btn-danger float-end"
          >
            Cancel
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default AssignmentEditor;
