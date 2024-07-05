import React from "react";
import "./footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Articles</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>
      <p>&copy; {currentYear} Kinan sleman. All rights reserved.</p>
    </footer>
  );
}
