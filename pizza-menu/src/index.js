import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
