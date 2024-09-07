// App.js
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

const user = {
  name: "Liza",
  city: "New York",
  bio: "I made this!",
  color: "firebrick",
};

const projects = [
  {
    id: 1,
    name: "Portfolio Site",
    about: "My portfolio using React",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "E-commerce Shop",
    about: "A full stack online shop",
    technologies: ["React", "Redux", "Node.js"],
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
