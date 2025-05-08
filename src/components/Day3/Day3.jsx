import "./style.css";

const CourseCatalog = () => {
  return (
    <>
      <div className="catalog">
        {courses.map((course) => {
          return <CourseCard key={course.courseId} course={course} />;
        })}
      </div>
    </>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div
      className="card"
      style={
        course.price > 250
          ? {
              boxShadow: "4px 8px rgba(0, 0, 0, 0.1)",
            }
          : {}
      }
    >
      <div className="title">
        <p style={course.price > 250 ? { fontWeight: "700" } : {}}>
          {course.courseTitle}
        </p>
      </div>
      <div className="card-body">
        <p>Instructor: {course.instructor}</p>
        <p>Duration: {course.duration}</p>
        <div className="tags">
          {course.tags.map((tag) => {
            return (
              <small className="tag" key={tag}>
                {tag}
              </small>
            );
          })}
        </div>
        <p>Price: ${course.price}</p>
      </div>
    </div>
  );
};

const courses = [
  {
    courseId: 1,
    courseTitle: "React for Beginners",
    instructor: "Jane Doe",
    duration: "6 weeks",
    tags: ["React", "Beginner", "Frontend"],
    price: "199",
  },
  {
    courseId: 2,
    courseTitle: "Advanced JavaScript",
    instructor: "John Smith",
    duration: "8 weeks",
    tags: ["JavaScript", "Advanced", "Programming"],
    price: "249",
  },
  {
    courseId: 3,
    courseTitle: "Intro to Web Development",
    instructor: "Emily Johnson",
    duration: "5 weeks",
    tags: ["Web Development", "Beginner", "Frontend"],
    price: "149",
  },
  {
    courseId: 4,
    courseTitle: "UI/UX Design Basics",
    instructor: "Michael Brown",
    duration: "4 weeks",
    tags: ["UI/UX", "Design", "Beginner"],
    price: "179",
  },
  {
    courseId: 5,
    courseTitle: "Backend Development with Node.js",
    instructor: "Sarah Williams",
    duration: "10 weeks",
    tags: ["Node.js", "Backend", "Development"],
    price: "299",
  },
  {
    courseId: 6,
    courseTitle: "Data Structures and Algorithms",
    instructor: "Daniel Martinez",
    duration: "12 weeks",
    tags: ["Algorithms", "Data Structures", "Advanced"],
    price: "349",
  },
];

export default CourseCatalog;
