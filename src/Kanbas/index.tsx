import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Courses from "./Courses";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";

const API_BASE = process.env.REACT_APP_API_BASE;
function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const COURSES_API =  `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: new Date().getTime().toString(),
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "reactjs.jpg",
  });
  
  const addNewCourse = async() => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };

  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="left-navb">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
          <Route path="/Account/*" element={<Account />} />
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route
              path="/Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            {/* <Route path="/Account" element={<h1>Account</h1>} /> */}
            <Route path="/Courses/:cid/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
