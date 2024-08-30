import React from "react";
import { useState } from "react";

export function Accordion({ data }) {
  return (
    <div className="accordian">
      {data.map((item, index) => (
        <AccordionItem
          num={index}
          title={item.title}
          text={item.text}
          key={index}
        />
      ))}
    </div>
  );
}

const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((isOpen) => !isOpen);
  };
  return (
    <div
      key={num}
      className={`item ${isOpen ? "open" : ""}`}
      onClick={handleClick}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>
      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
};
