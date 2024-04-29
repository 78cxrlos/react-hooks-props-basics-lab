import React from "react";

function About(props) {
  const { bio } = props;
  console.log(props);
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <h3>Links</h3>
      <a href="https://github.com/liza">{props.git}</a>
      <a href="https://www.linkedin.com/in/liza/">{props.linked}</a>
    </div>
  );
}

export default About;
