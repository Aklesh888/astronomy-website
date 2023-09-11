import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Planet from "./Planet";
import Quiz from "./Quiz";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";

const Hero = () => {
  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };
  return (
    <>
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        style={{
          zIndex: -100,
        }}
        options={{
          fpsLimit: 40,
          
          particles: {
            color: {
              value: "#f1f1f1",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 500,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 0.2,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.2,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 1.4,
            },
          },
        }}
      
      ></Particles> */}
      <div className="flex flex-col text-white bg-w text-left space-y-10 md:my-16">
        <div className=" flex justify-center md:mx-[20%] my-40 flex-col md:flex-row">
          <div className="text-3xl mx-6 py-1 px-6  text-white rounded-lg mt-4 font-medium">
            Discover the wonders of the universe with our astronomy app! Take a{" "}
            <a href="#quiz" className=" text-blue-500">
              astronomy quiz
            </a>
            , discover the{" "}
            <Link to="/asteroids" className="text-red-500">
              asteroids near earth
            </Link>{" "}
            at a particular date and{" "}
            <Link to="/apod" className="text-green-500">
              discover various images
            </Link>{" "}
            by date!
          </div>
          
          <Planet />
          
        </div>
        
        <Quiz></Quiz>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div className="bg-black max-w-[100vw] bg-fixed">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Home;
