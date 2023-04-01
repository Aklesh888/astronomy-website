import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Planet from "./Planet";
import Quiz from "./Quiz";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <>
      <Particles
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
                speed: 1.5,
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
      ></Particles>
      <div className="flex flex-col text-white bg-w text-left space-y-10 my-16">
        <div className=" flex justify-center md:mx-[20%] my-40">
          <div className="text-3xl mx-6 py-1 px-6  text-white rounded-lg mt-4 font-medium">
            Discover the wonders of the universe with our astronomy app! Take a{" "}
            <a href="#fd" className=" text-blue-500">
              astronomy quiz
            </a>
            , discover the{" "}
            <a href="#fd" className="text-red-500">
              asteroids near earth
            </a>{" "}
            at a particular date and{" "}
            <a href="#fd" className="text-green-500">
              discover various images
            </a>{" "}
            by date!
          </div>
          <Planet />
        </div>
        {/* <div className="flex flex-col mx-6 md:mx-[20%] px-3 my-10 bg-[#37306B] text-black rounded-lg">
          <div className="text-3xl mx-6 py-1 px-6 bg-[#DBE2EF] text-black rounded-lg mt-4 font-medium">
            What is Astronomy?
          </div>
          <div className="flex flex-row">
            <div className="text-xl mx-6 my-5 px-6 bg-[#DBE2EF] text-black rounded-lg">
              Astronomy is the study of celestial objects and phenomena that
              exist beyond the Earth's atmosphere. It is an ancient science that
              has fascinated humans for centuries, and its discoveries have
              greatly impacted our understanding of the universe. Astronomy
              involves the study of everything from stars, planets, and
              galaxies, to black holes, dark matter, and the Big Bang theory. In
              this essay, we will explore the history of astronomy, its
              importance, and some of the most significant discoveries in the
              field. The history of astronomy can be traced back to ancient
              civilizations such as the Babylonians, Greeks, and Egyptians.
              These early astronomers observed the movements of celestial
              objects, recorded astronomical events such as eclipses and
              supernovae, and developed calendars based on the cycles of the sun
              and moon. The famous Greek astronomer, Ptolemy, developed a model
              of the universe that placed the Earth at the center, which was
              widely accepted until the 16th century when Copernicus proposed a
              heliocentric model placing the sun at the center. The importance
              of astronomy lies in its ability to help us understand the
              universe and our place within it. By studying the movements and
              characteristics of celestial objects, astronomers can determine
              the age of the universe, the composition of stars and planets, and
              the origins of the universe. Astronomy also plays a crucial role
              in technological advancements, such as space exploration and
              satellite communication. One of the most significant discoveries
              in astronomy is the concept of the Big Bang theory, which suggests
              that the universe began as a single point and has been expanding
              ever since. This theory has been supported by observations of
              cosmic microwave background radiation, which is the residual heat
              left over from the Big Bang.
            </div>
          </div>
        </div> */}
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
