import Contact from "./components/4-contact/Contact";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    });
  }, []);
  
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />
      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: ".2s" }}
        href="#up"
      >
        <button className="scroll2top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
