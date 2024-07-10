import "../syles/sylesComponent/_hero.scss";
import Waving from "../images/waving.png";
import Html from "../images/html.svg";
import Css from "../images/css3.svg";
import Js from "../images/javascript.svg";
import React from "../images/react.svg";
import Tailwind from "../images/tailwind.svg";
import Sass from "../images/scss.svg";
import Styled from "../images/styled-components.svg";
import Next from "../images/nextjs-icon.svg"
import Typescript from "../images/typescript.svg"
import MongoDb from "../images/mongodb.svg"
import Node from "../images/node.svg"
import Express from "../images/express.svg"
import Strapi from "../images/strapi.svg"

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Full Stack Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, I'm Nitin Yadav. A passionate Full-Stack 
                  Developer based in India 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/nitin-yadav-8b521a19b/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Nitinyadav237"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <img src={Html} title="HTML5" alt="program_img" />
                  </li>
                  <li>
                    <img src={Css} title="CSS3" alt="program_img" />
                  </li>
                  <li>
                    <img src={Js} title="Javascript" alt="program_img" />
                  </li>
                  <li>
                    <img src={React} title="React JS" alt="program_img" />
                  </li>
                  <li>
                    <img
                      src={Tailwind}
                      title="Tailwind CSS"
                      alt="program_img"
                    />
                  </li>
                  <li>
                    <img src={Sass} title="Sass/Scss" alt="program_img" />
                  </li>
                    <li>
                    <img src={Styled} title="Styled-components" alt="program_img" />
                  </li>
                   <li>
                    <img src={Next} title="NextJs" alt="program_img" />
                  </li>
                   <li>
                    <img src={Typescript} title="Typescript" alt="program_img" />
                  </li>
                   <li>
                    <img src={MongoDb} title="MongoDb" alt="program_img" />
                  </li>
                    <li>
                    <img src={Node} title="NodeJS" alt="program_img" />
                  </li>
                    <li>
                    <img src={Express} title="Express" alt="program_img" />
                  </li>
                   <li>
                    <img src={Strapi} title="Strapi" alt="program_img" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
