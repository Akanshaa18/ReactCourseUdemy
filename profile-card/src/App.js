import React from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillSet from "./SkillSet";

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillSet />
      </div>
    </div>
  );
};

export default App;
