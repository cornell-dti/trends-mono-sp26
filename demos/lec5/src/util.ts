/**
 * Makes an array with the integers from 0 (inclusive) to n (exclusive).
 * @param n The size of the array with numbers from [0..n-1]. Requires n >= 0.
 */
export const makeArray = (n: number) =>
  Array.from({ length: n }).map((_, index) => index);

interface ApiCourseData {
  description?: string;
  catalogNbr: string | number;
  catalogWhenOffered?: string;
  enrollGroups: ApiEnrollGroup[];
}

interface ApiEnrollGroup {
  unitsMinimum: number;
  classSections: ApiClassSection[];
}

interface ApiClassSection {
  meetings: ApiMeeting[];
}

interface ApiMeeting {
  instructors: Instructor[];
}

/**
 * Fetches detailed course information from the Cornell API
 * @param subject The course subject code (e.g., "CS")
 * @param catalogNbr The course catalog number (e.g., 1110)
 */
export const fetchCourseDetails = async (
  subject: string,
  catalogNbr: number
): Promise<Partial<Course>> => {
  try {
    // Make the API request to fetch course details
    

    // What to do if the API request fails? (e.g., log the error and return an empty object)
    

    // successful case
    // Retrieve the course data from the API response and extract relevant details
    

    // Find the specific course data in the API response that matches the subject and catalog number
   
    // edge case: what to do if the course isn't found in the API response? (e.g., log a warning and return an empty object)

    const details: Partial<Course> = {};

    // Extract relevant details from the API response 
    

    // TODO: catalogWhenOffered, credits, instructors
    
    return details;
  } catch (err) {
    console.error("Error fetching course details:", err);
    return {};
  }
};
