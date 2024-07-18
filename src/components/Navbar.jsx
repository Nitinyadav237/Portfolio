import { useState } from "react";
import "../syles/sylesComponent/_nav.scss";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <h3 onClick={pageUp} className="logo">
          Nitin_Yadav.dev
        </h3>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Dd_QXPrB5cQW38LOcRyD_DjLeSWP73qc/view?usp=sharing
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li onClick={() => hamburgerMenu()} className="hamburger-icon">
            <i className="fa-solid fa-bars-staggered mobile-menu"></i>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <i className="fa-solid fa-xmark"></i>
        </span>

        <ul>
          <li onClick={() => hamburgerMenu()}>
            <a href="#home">Home</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#about">About</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#projects">Projects</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a
              href="https://drive.google.com/file/d/1GzaxsMbUrOAp7fRSwl07RkGxKWzuBMYz/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
