import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
