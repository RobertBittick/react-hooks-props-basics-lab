import React from "react";
import user from "../data/user";

function Links(){
  return(
    <div id ="links">
      <h3>Links</h3>
      <a href={user.links.github}>https://github.com/liza</a>
      <a href={user.links.linkedin}>https://www.linkedin.com/in/liza/</a>
    </div>
  )
        
}

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      {user.bio ? <p>{user.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
