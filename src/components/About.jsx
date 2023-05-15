import AboutImg from "../images/about.webp";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.png";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h4>About </h4>
              <h3>
                A dedicated Front-end Developer <br /> based in Chennai,India
                📍
              </h3>
              <p>
                 As a Junior Front-End Developer, I have an impressive set of skills in HTML, CSS, JavaScript,TypeScript, React, Next.js, Tailwind, Node.js, and Express, as well as experience working with MongoDB. I excel at designing and maintaining responsive websites that provide an excellent user experience. My expertise involves creating dynamic and engaging interfaces through writing optimized and clean code and utilizing the latest development tools and techniques. I am a team player who enjoys collaborating with cross-functional teams to create exceptional web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
