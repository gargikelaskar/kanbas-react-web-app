import React from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import courses from "../Database/courses.json";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { IoIosArrowForward } from "react-icons/io";

function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  return (
    <>
      <h5 className="custom-top-navbar custom-breadcrumb">
      <span className="custom-top-breadcrumb"><HiMiniBars3 /> Course {course?.name}</span> <IoIosArrowForward/>
      </h5>
      <div className="d-flex">
      <div className="d-none d-md-block">
        <CourseNavigation/>
      </div>
      <div className="flex-fill">
      <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="ZoomMeetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
          </Routes>
      </div>
      
    </div>


      
      

      {/* <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre> */}
    </>
  );
}

export default Courses;
