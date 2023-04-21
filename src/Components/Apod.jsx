import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Loader } from "react-feather";import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";
import DatePicker from "./DatePicker";


const apiKey = `${process.env.REACT_APP_API_KEY}`;


const PictureCard = (props) => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${props.date}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, [props.date]);

  if (!photoData) {
    return (
      <div className=" flex items-center justify-center my-20">
        <Loader className="animate-spin" color="white" size={64}></Loader>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col rounded-3xl w-auto self-center h-auto m-20 justify-around bg-white lg:flex-row">
        {photoData.media_type === "image" ? (
          <img
            src={photoData.url}
            alt=""
            className="lg:h-[25rem] lg:w-[25rem] self-center rounded-3xl lg:m-8"
          />
        ) : (
          <video src={photoData.url}>
            <source
              type="video/mp4"
              className="lg:h-[25rem] lg:w-[25rem] self-center rounded-3xl lg:m-8"
            />
          </video>
        )}
        <div className="h-auto w-auto m-5">
          <div className="text-2xl m-10 md:text-3xl font-bold">
            {photoData.title}
          </div>
          <div className="m-10">{props.date}</div>
          <div className="m-10 text-base ">{photoData.explanation}</div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const [date, setDate] = useState("");

  return (
    <>
      <div className="flex justify-center flex-col pt-5">
        <div className="text-white text-5xl text-center">Today's Picture</div>
        <PictureCard date="" />
        <DatePicker
      
          onDatePicked={(enteredDate) => {
            setDate(enteredDate)
            
          }}
        />
        <PictureCard date={date} />
      </div>
    </>
  );
};

const Apod = () => {
  return (
    <>
      <div className="bg-black h-auto ">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Apod;
