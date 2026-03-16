/* eslint-disable @typescript-eslint/no-unused-vars */
import Semester from "./Semester";
import "./styles.css";
import { COURSES } from "../constants/consts";
import { useState } from "react";
import { makeArray } from "../util";

const CoursePlan = () => {
  const [semesterCount, setSemesterCount] = useState<number>(1);

  const handleNewSemesterClick = () => {
    setSemesterCount(semesterCount + 1);
  };

  return (
    <div>
      {/* Activity 1: Implement the "New Semester" button to add a new semester  */}
      <button className="newSemesterButton" onClick={handleNewSemesterClick}>
        + New Semester
      </button>
      <div className="semesterContainer">
        Semesters should be displayed here!
      </div>
    </div>
  );
};

export default CoursePlan;
