import React from "react";

const data = [
  { skillName: "React", colour: "#35374B", proficiency: "intermediate" },
  { skillName: "Javascript", colour: "#344955", proficiency: "intermediate" },
  { skillName: "Python", colour: "#50727B", proficiency: "beginner" },
  { skillName: "C++", colour: "#78A083", proficiency: "advanced" },
  {
    skillName: "Java & SpringBoot",
    colour: "#344955",
    proficiency: "beginner",
  },
  { skillName: "C# & ASP.NET", colour: "#50727B", proficiency: "beginner" },
];
const SkillSet = () => {
  return (
    <div className="skill-list">
      {data.map((skill) => (
        <Skill skillObj={skill} key={skill.skillName} />
      ))}
    </div>
  );
};
function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.colour }}>
      <span>{skillObj.skillName}</span>
      <span>
        {skillObj.proficiency === "beginner" && "⭐️"}
        {skillObj.proficiency === "intermediate" && "⭐️⭐️"}
        {skillObj.proficiency === "advanced" && "⭐️⭐️⭐️"}
      </span>
    </div>
  );
}

export default SkillSet;
