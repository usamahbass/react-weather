import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span>API by</span>
        <a href="https://openweathermap.org/">OpenWeather</a>
      </div>
    </footer>
  );
};
