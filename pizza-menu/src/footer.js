import React from "react";

const Footer = () => {
  const currentHour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are open until {closeHour}:00. Come visit us or order online</p>
          <buttton className="btn">Order</buttton>
        </div>
      ) : (
        <p>We are closed now. Come back at {openHour}:00</p>
      )}
    </footer>
  );
};

export default Footer;
