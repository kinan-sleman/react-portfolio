import React, { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
``;
export default function Main() {
  const handleClick = (value) => {
    setCurrentActive(value);
    if (value === "all") {
      setArr(myProjects);
    } else {
      const newArr = myProjects.filter((item) => {
        return item.category.includes(value);
      });
      setArr(newArr);
    }
  };
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => handleClick("all")}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS 
        </button>
        {/* <button
          onClick={() => handleClick("JS")}
          className={currentActive === "JS" ? "active" : null}
        >
          JavaScript
        </button> */}
        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : null}
        >
          React & Tailwind
        </button>
        {/* <button */}
        {/*   onClick={() => handleClick("vue")} */}
        {/*   className={currentActive === "vue" ? "active" : null} */}
        {/* > */}
        {/*   Vue */}
        {/* </button> */}
        <button
          onClick={() => handleClick("company_tasks")}
          className={currentActive === "company_tasks" ? "active" : null}
        >
          Compony Tasks
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.a
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 100 }}
                key={item.imgPath}
                href={item.link}
                target="_blank"
              >
                <article className="card">
                  <img width={266} src={item.imgPath} alt="" />
                  <div style={{ width: "266px" }} className="box">
                    <h1 className="title">{item.title}</h1>
                    <p className="sub-title">{item.description}</p>
                    <div className="icons flex" style={{ gap: "11px" }}>
                      <div className="flex">
                        <a href={item.link} target="_blank">
                        <div className="icon-link"></div>
                        </a>
                      </div>
                        <a href={item.githubURL} target="_blank">
                          <div className="icon-github"></div>
                        </a>
                    </div>
                  </div>
                </article>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
