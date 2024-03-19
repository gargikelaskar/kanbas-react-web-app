import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import { addAssignment, selectAssignment, updateAssignment } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { useEffect } from "react";

function AssignmentEditor() {
  const { cid } = useParams();
  console.log("courseId = " + cid);
  const { assignmentId } = useParams();
  console.log("assignmentId = " + assignmentId);
  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (assignmentId !== undefined) {
      if (assignmentId.localeCompare("Editor")) {
        const a = assignmentList.find(
          (assignment) => assignment._id === assignmentId
        );
        dispatch(selectAssignment(a));
      } else {
        dispatch(
          selectAssignment({
            _id: "",
            title: "Assignment",
            description: "Assignment Description",
            dueDate: "2024-04-01",
            availableFromDate: "2024-03-01",
            availableUntilDate: "2024-05-01",
            points: "100",
          })
        );
      }
    }
  }, []);

  function handleSave() {
    if (assignmentId !== undefined) {
      if (!assignmentId.localeCompare("Editor")) {
        dispatch(addAssignment({ ...assignment, course: cid }));
      } else {
        dispatch(updateAssignment(assignment));
      }
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  }

  return (
    <>
      <div>
        <form>
          <h2>Assignment Name</h2>
          <input
            type="text"
            className="form-control"
            id="assignmentName"
            value={assignment?.title}
            onChange={(e) =>
              dispatch(
                selectAssignment({ ...assignment, title: e.target.value })
              )
            }
          />
          <br />

          <div className="form-group">
            <textarea
              className="form-control"
              id="description"
              rows={3}
              value={assignment?.description}
              onChange={(e) =>
                dispatch(
                  selectAssignment({
                    ...assignment,
                    description: e.target.value,
                  })
                )
              }
            ></textarea>
          </div>
          <br />

          <div className="row">
            <div className="col-md-3 text-end">
              <label className="mx-3">Points</label>
            </div>
            <div className="col-md-9">
              <input
                type="number"
                min="0"
                className="form-control"
                id="points"
                value={assignment?.points}
                onChange={(e) =>
                  dispatch(
                    selectAssignment({ ...assignment, points: e.target.value })
                  )
                }
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-md-3 text-end">
              <label className="mx-3">Assignment Group</label>
            </div>
            <div className="col-md-9">
              <select className="form-control">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
              </select>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-md-3 text-end">
              <label>Display Grade as</label>
            </div>
            <div className="col-md-9">
              <select className="form-control">
                <option>Percentage</option>
                <option>Marks</option>
              </select>
              <br />
              <input type="checkbox" id="count_final_grade" />
              <label>
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
          <br />

          <div className="row ">
            <div className="col-md-3 text-end">
              <label>Submission Type</label>
            </div>
            <div className="col-md-9">
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
            <div className="col-md-3 text-end">
              <label>Assign</label>
            </div>
            <div className="col-md-9">
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
                <input id="dueDate" className="form-control" type="date" value={assignment?.dueDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}/>
                <br />

                <div className="row">
                  <div className="col-md-6">
                    <label>
                      <b>Available from</b>
                    </label>
                    <input id="availableFrom" className="form-control" type="date" value={assignment?.availableFromDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}/>
                  </div>

                  <div className="col-md-6">
                    <label>
                      <b>Until</b>
                    </label>
                    <input id="untilDate" className="form-control" type="date" value={assignment?.availableUntilDate} onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}/>
                  </div>
                </div>
                <br />

                <button className="btn rounded-0 addButton">+ Add</button>
              </div>
            </div>
          </div>
          <hr />
        </form>

        <button
          onClick={handleSave}
          className="btn btn-light btn-outline-dark wd-save-button ms-2 float-end"
        >
          Save
        </button>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-light btn-outline-dark wd-cancel-button float-end"
        >
          Cancel
        </Link>

        <hr />
      </div>
    </>
  );
}
export default AssignmentEditor;
