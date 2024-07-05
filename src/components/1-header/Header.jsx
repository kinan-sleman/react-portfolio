import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(window.localStorage.getItem('currentTheme') ?? 'dark');

  const handleTheme = () => {
    window.localStorage.setItem('currentTheme',theme === 'light' ? 'dark' : 'light');
    setTheme(window.localStorage.getItem('currentTheme'));
  }

  useEffect(() => {
    if(theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);
  return (
    <header className="flex">
      <button onClick={() => setShowModal(true)} className="menu flex icon-menu" />
      <div></div>
      <nav>
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
      </nav>
      <button onClick={handleTheme} className="mode flex">
      {theme === 'light' ? (

        <span className=" icon-sun"></span>
      ) : (
        <span className=" icon-moon-o"></span>

      )}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
            </li>
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
        </div>
      )}
    </header>
  );
}
