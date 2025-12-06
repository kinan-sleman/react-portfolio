import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import developerAnimation from "../../animation/developer.json";
export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            alt=""
            className="avatar"
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Full Stack Developer, founder ,and amateur programmer.
        </motion.h1>
        <p className="subtitle">
          I'm Kinan, a Front-end developer with extensive experience in developing
          business applications. My skills include project management, software
          development, and user documentation.
        </p>

        <div className="all-icons flex">
          <a
            className="icon icon-facebook-square"
            href="https://www.facebook.com/kenan.sleman.58/"
            target="_blank"
          ></a>
          <a
            className="icon icon-instagram"
            href="https://www.instagram.com/kinan_sleman50/"
            target="_blank"
          ></a>
          <a
            className="icon icon-github"
            href="https://github.com/kinan-sleman"
            target="_blank"
          ></a>
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/kinan-sleman-a0a08a36a/"
            target="_blank"
          ></a>
        </div>
      </div>
      <div className="animation right-section">
        <Lottie
          className="developer-animation"
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
