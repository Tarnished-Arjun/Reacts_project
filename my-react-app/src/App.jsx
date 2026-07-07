import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./Header";
import Student from "./Student";
import Skills from "./Skills";
import Counter from "./Counter";
import Toggle from "./Toggle";
import Todo from "./Todo";
import Users from "./Users";

function App() {
  const [count, setCount] = useState(0);

  const name = "Arjun";

  const login = false;

  const student = {
    name: "Arjun",
    age: 21,
  };

function greet() {
    return "Good Morning";
  }
  const skills = ["React", "Java", "SQL", "HTML"];

  return (
    <>
      {/* CommeNt */}

      <h1 className="title">React</h1>

      <h2>Hello {name}</h2>

      <h2 style={{ color: "red", fontSize: "30px" }}>
        This text is red
      </h2>

      <h2>{login ? "Please login" : "Welcome"}</h2>

      <h2>{greet()}</h2>

      <h2>Student Name: {student.name}</h2>
      <h2>Student Age: {student.age}</h2>

      <Student />
      <Skills skills={skills} />
      <Counter />
       <Toggle />
      <Todo /> 
      <Users />
    </>
  );
}

export default App;

