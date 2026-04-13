/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getDoc, // preferred in latest versions of firebase
  setDoc, // for upsert operations
} from "firebase/firestore";
import { db } from "./firebase"; // db is our Firestore instance!
import { Course } from "./types";

// TODO:
// Get all semesters and their courses
export const fetchAllSemesters = async (): Promise<
  {
    name: string;
    semNum: number;
    id: string;
  }[]
> => {
  return [];
};

// TODO:
// Add a new semester
export const addSemester = async (name: string): Promise<string | null> => {
  return null;
};

// TODO
// Get all courses for a semester
export const fetchCoursesForSemester = async (
  semesterId: string,
): Promise<Course[]> => {
  return [];
};

// TODO
// Add a course to a semester
export const addCourseToSemester = async (
  semesterId: string,
  course: Course,
): Promise<string | null> => {
  // Two options
  return null;
};

// TODO: Try it yoursel!f!
// Delete a course from a semester
export const deleteCourseFromSemester = async (
  semesterId: string,
  courseId: string,
): Promise<boolean> => {
  return false;
};

// NOTE: Will not be implemented during lecture
// Update course notes
export const updateCourseNotes = async (
  semesterId: string,
  courseId: string,
  notes: string,
): Promise<boolean> => {
  try {
    const docRef = doc(db, `semesters/${semesterId}/courses`, courseId);
    await updateDoc(docRef, { notes });
    return true;
  } catch (e) {
    console.error("Error updating course notes:", e);
    return false;
  }
};

// NOTE: Will not be implemented during lecture
// Update course details to show or hide
export const updateCourseDetails = async (
  semesterId: string,
  courseId: string,
  showDetails: boolean,
): Promise<boolean> => {
  try {
    const docRef = doc(db, `semesters/${semesterId}/courses`, courseId);
    await updateDoc(docRef, { showDetails });
    return true;
  } catch (error) {
    console.error("Error updating course details:", error);
    return false;
  }
};

// TODO:
// Add a course to the courses collection
// called by Cornell Roster API when we fetch courses from a particular semester, we also want to add it to the courses collection if it's not already there
export const addCourseToDB = async (course: any): Promise<string | null> => {
  return null;
};

// NOTE: Will not be implemented during lecture
// Get all courses from the courses collection
// Called by /api/courses endpoint to get all courses already in database
export const fetchAllCourses = async (): Promise<Partial<Course>[]> => {
  try {
    const coursesCollection = collection(db, "courses");
    const querySnapshot = await getDocs(coursesCollection);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Partial<Course>[];
  } catch (error) {
    console.error("Error fetching all courses:", error);
    return [];
  }
};
