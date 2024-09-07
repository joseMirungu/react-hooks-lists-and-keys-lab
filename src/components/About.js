// About.js
import React from "react";
import Links from "./Links";

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <Links github="https://github.com/liza" linkedin="https://linkedin.com/in/liza" />
    </div>
  );
}

export default About;
