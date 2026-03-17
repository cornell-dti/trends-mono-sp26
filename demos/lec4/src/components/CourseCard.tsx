

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <>
      <p className="courseCode">
        {course.subject} {course.catalogNbr}
      </p>
      <p className="courseTitle">{course.titleShort}</p>
    </>
  );
};

export default CourseCard;
