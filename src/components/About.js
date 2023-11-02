import React from "react";
import mainprofile from "../imgFolder/mainprofile.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi ! I'm Catherine 🖐,
          </p>
          <p className="pb-5">
             From Industrial Design to UX, my journey has been diverse. With a Bachelor of Arts in Industrial Design, 
             I honed my creative skills. A UX design certificate introduced me to the tech industry. 
             Following a UX research internship, I realized the importance of not only intuitive interfaces but also building them.
             This led me to a Software Engineering program where I've mastered key languages like JavaScript, HTML5, React, Node.js, and Bootstrap. 
             Now, my focus is on becoming a strong web developer and crafting exceptional user experiences with a team. 
          </p>

          <p>I'm familiar with Node.js, Express.js, and MongoDB for backend development.</p>

          <p>
           Welcome to my portfolio 
          </p>
        </div>

        <div className="about-img">
          <img
            src={mainprofile}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
            style={{ opacity: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;