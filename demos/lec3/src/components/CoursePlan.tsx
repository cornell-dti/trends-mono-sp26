import Dropdown from "./Dropdown";
import { COURSES } from "../constants/consts";
import { useState } from "react";

export const CoursePlan = () => {
    const [currentCourse, setCurrentCourse] = useState<Course | null>(null); 
    const [numSemesters, setNumSemesters] = useState<number>(0); 
  return (
    <div>
      <h1>Course Plan Clone</h1>
      <p>Current Course: {currentCourse?.titleShort || "None"}</p>
      <Dropdown
        options={COURSES}
        onChange={(value) => {
          setCurrentCourse(value);
        }}
      />
      <p>Number of Semsesters: {numSemesters}</p>
      <button onClick={() => setNumSemesters(numSemesters + 1)}>Add Semester</button>
    </div>
  );
};

export default CoursePlan;
