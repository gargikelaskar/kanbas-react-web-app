import axios from "axios";
const COURSES_API = "http://localhost:4000/api/courses";

export const fetchAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    return response.data;
};

export const fetchCourseByID = async (id?: string) => {
    const response = await axios.get(COURSES_API + `/${id}`);
    return response.data;
};

export const createCourse = async (course:any) => {
    const response = await axios.post(COURSES_API, course)
    return response.data;
};

export const deleteCourse = async (id?: string) => {
    const response = await axios.delete(COURSES_API + `/${id}`)
    return response.data;
};

export const updateCourse = async (id?: string, course?:any) => {
    const response = await axios.put(
        `${COURSES_API}/${course._id}`,
        course
    )  
    return response.data;
};