import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Loader } from "react-feather";import "react-datepicker/dist/react-datepicker.css";
import Footer from "./Footer";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

const DatePicker = (props) => {
  const newDate = new Date();

  let day = newDate.getDate() + 1;
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  const [date, setDate] = useState('');
  const [isDateValid, setIsDateValid] = useState(false);

  const new_date = (event) => {
    const d1 = Date.parse(event.target.value);
    const d2 = Date.parse(currentDate);

    if (d1 > d2) {
      setIsDateValid(true);
    } else {
      console.log(event.target.value);

      setDate((prevSelectedDate) => {
        if (prevSelectedDate === event.target.value) {
          return prevSelectedDate;
        }
        return event.target.value;
      });
      props.onDatePicked(event.target.value);
      setIsDateValid(false);
    }
  };

  const handleChange = () => {
    setIsDateValid(false);
  };

  return (
    <>
      <div className=" text-4xl text-white text-center">
        CHOOSE THE DATE OF THE PICTURE
      </div>
      <DateError
        className={` transition-all duration-500 ${
          isDateValid ? "mt-10" : "mt-[-8000px]"
        }`}
        onClick={handleChange}
      />
      <div className=" self-center">
        <input onChange={new_date} type="date" value={date} className="m-10" />
      </div>
    </>
  );
};

const DateError = ({ className, onClick }) => {
  return (
    <div className={`${className} fixed ml-[50%]`}>
      <div className="relative ml-[-50%]  h-40 w-aut0 mt-[-600px] rounded-lg text-white text-center bg-red-700">
        <div className="text-2xl font-semibold">Error date</div>
        <div className="text-lg"> The date you picked was invalid</div>
        <button
          className=" bg-white rounded-md p-2 m-2 text-black"
          onClick={onClick}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

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
      <div className="flex justify-center flex-col">
        <div className="text-white text-5xl text-center">Today's Picture</div>
        <PictureCard date="" />
        <DatePicker
      
          onDatePicked={(enteredDate) => {
            setTimeout(() => {
              setDate(enteredDate);  
              console.log(enteredDate);
            }, 1000);
            
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
      <div className="bg-black h-auto">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Apod;
