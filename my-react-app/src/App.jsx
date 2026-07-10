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
import CounterTitle from "./CounterTitle";
import Clock from "./Clock";
import Login from "./Login";
import NumberDisplay from "./NumberDisplay";
import { NumberContext } from "./NumberContext";
import Library from "./Library";
import Home from "./Home1";
import About from "./About";
import Contact from "./Contact";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home2";
import Register from "./Register";
import Success from "./Success";

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
      <CounterTitle />
      <Clock />
      <Login />
      <NumberContext.Provider value={100}>
       <NumberDisplay />
      </NumberContext.Provider>
      <Library />
      <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;

