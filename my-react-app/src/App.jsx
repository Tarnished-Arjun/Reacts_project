import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./Header";
import Student from "./Student";


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
    </>
  );
}

export default App;

