import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Personal Project 1 : Website Design",
      dicsription: "This website have been design for an NGO Ivoire Alliance",
      github_link: "/",
      live_link: "https://ivoirealliance.org/",
    },
    {
      img: project2,
      name: "Personal Project 2: Website Design",
      dicsription:"This website have been design for an Airplane Maintenance Startup",
      github_link: "/",
      live_link: "https://ivoirealliance.org/",
    },
    {
      img: project3,
      name: "Personal Project 3: My Digital Business Website",
      dicsription:"This website show my services and another portfolio with some of my graphic design work",
      github_link: "/",
      live_link: "https://digitalqueenagency.com/2097-2/",
    },
    {
      img: project4,
      name: "School Project 1: Learning and Career Agregator",
      github_link:
        "/",
      live_link: "https://markthos.github.io/Job.BI/landingPage.html",
    },
  {
    img:project5,
    name: "School Project 2: Travel personal budget App",
    dicsription:"This website is my first school group project, This project has been build to demonstrate how we learned this past 3 months in class",
    github_link: "https://github.com/SquirrelsAtARave/Travel-Geek",
    live_link: "/",
  }
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      
      </div>
    </section>
  );
};

export default Project;
