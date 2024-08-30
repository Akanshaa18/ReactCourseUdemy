import "./styles.css";
import { Accordion } from "./Accordian";

const faqs = [
  {
    title: "What is ReactJS?",
    text: "ReactJS is a JavaScript library used to build reusable components for the view layer in MVC architecture. It is highly efficient and uses a virtual DOM to render components. It works on the client side and is written in JSX.",
  },
  {
    title: "What is useState in React?",
    text: "The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.",
  },
  {
    title: "What is JSX?",
    text: "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild() or createElement().",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
