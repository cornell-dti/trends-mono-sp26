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
 * @note The Cornell API can be accessed at `https://classes.cornell.edu/api/2.0/search/classes.json?roster=SP26&subject=${subject}`
 */
export const fetchCourseDetails = async (
  subject: string,
  catalogNbr: number,
): Promise<Partial<Course>> => {
  try {
    // Make the API request to fetch course details
    const response = await fetch(
      `https://classes.cornell.edu/api/2.0/search/classes.json?roster=SP26&subject=${subject}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    );

    // What to do if the API request fails? (e.g., log the error and return an empty object)
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    // successful case
    // Retrieve the course data from the API response and extract relevant details
    const data = (await response.json()) as {
      data: {
        classes: ApiCourseData[];
      };
    };

    // Find the specific course data in the API response that matches the subject and catalog number
    const specificCourseData = await data.data.classes.find(
      (course: ApiCourseData) => Number(course.catalogNbr) == catalogNbr,
    );

    // edge case: what to do if the course isn't found in the API response? (e.g., log a warning and return an empty object)
    if (!specificCourseData) {
      console.log(
        `Course ${subject} ${catalogNbr} is not found in the Cornell Course Roster API`,
      );
      return {};
    }

    // Extract relevant details from the API response
    const details: Partial<Course> = {};

    if (specificCourseData?.description) {
      details.description = specificCourseData?.description;
    }

    // TODO: catalogWhenOffered, credits, instructors

    // adds details on when a course is offered
    if (specificCourseData?.catalogWhenOffered) {
      details.whenOffered = specificCourseData.catalogWhenOffered;
    }

    // adds details on how many credits a course is
    if (
      specificCourseData?.enrollGroups &&
      specificCourseData.enrollGroups.length > 0
    ) {
      details.credits = specificCourseData.enrollGroups[0].unitsMinimum;
    }

    // adds instructor information
    if (
      specificCourseData.enrollGroups &&
      specificCourseData.enrollGroups.length > 0
    ) {
      details.instructors =
        specificCourseData.enrollGroups[0].classSections[0].meetings[0].instructors;
    }

    return details;
  } catch (err) {
    console.error("Error fetching course details:", err);
    return {};
  }
};
