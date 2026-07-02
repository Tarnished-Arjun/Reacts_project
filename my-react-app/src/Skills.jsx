function Skills({ skills }) {
  return (
    <div>
      <h1>Skills</h1>

      {skills.map((skill, index) => (
        <h2 key={index}>{skill}</h2>
      ))}
    </div>
  );
}

export default Skills;