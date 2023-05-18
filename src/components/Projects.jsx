import NyTechno from "../images/NY Technco.png";
import Logistics from "../images/Logistics_next.png";
import ProBox from "./ProBox";
import NYTechnoTravel from "../images/NYtechno_travel.png";
import ShoeStore from "../images/Shoe Store NYtechno.png";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="NYTechno"
                img={NyTechno}
                description=" The website was developed using Styled Components with a responsive design, making it accessible on mobile devices. It consists of various sections such as About, Contact, and Services."
                techno1="React with Js"
                techno2="Styled-Components"
                code="https://github.com/Nitinyadav237/nytechno"
                demo="https://nytechno.netlify.app/"
                scrollY="-83%"
                
              />

              <ProBox
                title="Logistics"
                img={Logistics}
                description="The logistics website, developed with TypeScript and Next.js, incorporates Motion Framer for animation and styling via Tailwind CSS. However, it should be noted that the website is solely optimized for laptop devices."
                techno1="Next JS with Typescript"
                techno2="Tailwindcss with Motion Framer"
                code="https://github.com/Nitinyadav237/Logistics"
                demo="https://logistics-alpha.vercel.app/"
                scrollY="-74%"
                
                cName="reversed-proj"
              />

              <ProBox
                title="NYTechnoTravel"
                img={NYTechnoTravel}
                description="The travel website, developed with the MERN stack and utilizing Remix icons, features login, register, and logout functionality. Data is fetched dynamically from MongoDB and encrypted using JWT tokens. Additionally, users can book tours and share their reviews of the tours they have taken."
                techno1="React,Express"
                techno2="MongoDB,NodeJS"
                code="https://github.com/Nitinyadav237/nyTechnoTravel"
                demo="https://ny-techno-travel.vercel.app/home"
                scrollY="-89%"
                
              />

              <ProBox
                title="ShoeStore"
                img={ShoeStore}
                description="An ecommerce shoe store website was developed using Next.js and Tailwind CSS, with data fetched from Strapi. The data in Strapi is defined by a schema. Payment for purchases is completed through Stripe."
                techno1="NextJS"
                techno2="Tailwind CSS"
                code="https://github.com/Nitinyadav237/shoe-store-frontend"
                demo="https://ny-shoestore.vercel.app/"
                scrollY="-71%"
                
                cName="reversed-proj"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
