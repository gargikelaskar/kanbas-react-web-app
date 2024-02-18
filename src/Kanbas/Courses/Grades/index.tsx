import "./index.css";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import GradesButtons from "./GradesButtons";

function Grades() {
  const { cid } = useParams();

  // Filter assignments and enrollments by the course ID
  const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
  const courseEnrollments = enrollments.filter((enrollment) => enrollment.course === cid);

  return (
    <div>
      <GradesButtons/>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {courseAssignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courseEnrollments.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment.user}>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {courseAssignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td key={assignment._id}>{grade?.grade || ""}</td>);
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
