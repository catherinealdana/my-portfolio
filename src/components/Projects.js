import React from 'react';
import cozywebsitemain from "../imgFolder/cozywebsitemain.png";
import restaurantappimg from "../imgFolder/restaurantappimg.png";
import welovemovies from "../imgFolder/welovemovies.png";
import abcarrentalapp from "../imgFolder/abcarrentalapp.png";


export default function Projects() {

    const projects= [
      {
        img: cozywebsitemain,
        title:"Vacation Website",
        desc:"A vacation rental website that allows people to rent out their homes to people who are seeking short-term accommodations in that locale",
        live: "https://catherinealdana.github.io/cozyrentalhome/",
        code: "https://github.com/catherinealdana/cozyrentalhome",
      },
      {
        img: restaurantappimg,
        title: "Restaurant reservation app",
        desc:"Reservation system for fine dining restaurants • The software is used only by restaurant personnel when a customer calls to request a reservation. • At this point, the customers will not access the system online.",
        live: "https://restaurant-res-app.onrender.com/dashboard",
        code: "https://github.com/catherinealdana/reservation_app_project",
      },
      {
        img:welovemovies,
        title: "We love Movies",
        desc: "Discover a meticulously assembled movie website that provides a user-friendly platform for searching and exploring your favorite films.",
        live: "https://we-love-movies-frontend-wimj.onrender.com/",
        code: "https://github.com/catherinealdana/we-love-movies/tree/main",
      },
      {
        img:abcarrentalapp,
        title: "ab car rental app",
        desc: "User Experience (UX) and User Interface (UI) Design for a Car Rental App",
        live: "https://www.figma.com/proto/YgIRboSrV5EujiVEf7yNIz/APP?type=design&node-id=23-620&t=WKAH6jin4NrzB3w8-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
      },

];


  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
    <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
      <div className="about-info mb-5">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
          Projects
        </h2>

        <p className="pb-5">
         Most relevant projects... and more to come
        </p>
      </div>

      <div className="mainprofile"></div>
    </div>

    <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
      {projects.map((project, i) => {
        return (
          <div className="relative" key={i}>
            <img src={project.img} alt={project.title} />
            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
              <p className="py-5 text-center font-bold px-2 text-white">
                {project.desc}
              </p>

              <div className="mx-auto">
                <a
                  href={project.live}
                  className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
}
