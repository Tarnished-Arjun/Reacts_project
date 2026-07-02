function Student() {
  const students = [
    {
      id: 1,
      name: "Rahul",
      age: 20,
      course: "React"
    },
    {
      id: 2,
      name: "Priya",
      age: 21,
      course: "Java"
    },
    {
      id: 3,
      name: "Arun",
      age: 22,
      course: "Python"
    }
  ];

  return (
    <div>
      <h1>Student Details</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>Name: {student.name}</h3>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Student;