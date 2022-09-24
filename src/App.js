import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

function Det() {
  return (
    <div className='someClass'>
      <h1>Developer site</h1>
      <p>This is my portfolio</p>

    </div>
  )
}

function Site() {
  return (
    <div className='target'>
      <h1>Site analysis</h1>
    </div>

  )
}

function App() {
  return (
    <div className="a">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Team" element={<Teams />}></Route>
          <Route path="/add-student" element={<Form />}></Route>
          <Route path="/todo-List" element={<ToDoList />}></Route>

        </Routes>

      </BrowserRouter>
    </div>

  );
}

function NavBar() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Team">Team</Link>
      <Link to="/add-student">Add student</Link>
      <Link to="Todo-list">To do list</Link>
    </div>
  )
}

function About() {
  return <div>This is my about component</div>

}

function Contact() {
  return <div>This is my contact component</div>
}

function Teams() {
  return (
    <div>
      This is my Team
    </div>
  )
}

export default App;