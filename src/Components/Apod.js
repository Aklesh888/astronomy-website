import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const apiKey = "LoMhHCSE8nMbdoHivxsYvHzItIjokow73ZU9QeaX";
// const date = new date

const DatePicker = () => {
  const [date, setDate] = useState(null);

  const new_date = (event) => {
    setDate(event.target.value);
  };

  return (
    <>
      <div className=" text-4xl text-white text-center">
        CHOOSE THE DATE OF THE PICTURE
      </div>
      <div className=" self-center">
        <input onChange={new_date} type="date" className="m-10" />
      </div>
      {date}
    </>
  );
};

const PictureCard = (props) => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) {
    return <div></div>;
  }
  return (
    <div className="flex rounded-3xl w-auto self-center h-auto m-20 justify-around bg-white">
      <img src={props.url} alt="" className="h-[30rem] w-[30rem]" />
      <div className=" h-auto w-auto m-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer.
      </div>
    </div>
  );
};

const Hero = () => {
  const [photoData, setPhotoData] = useState(null);
  const [date, setDate] = useState(null)

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) {
    return <div></div>;
  }
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="text-white text-5xl text-center">Today's Picture</div>
        <PictureCard url={photoData.url} />
        <DatePicker onDatePicked={(enteredDate)=>{setDate(enteredDate)}}/>
        <PictureCard url={photoData.url} />
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
      </div>
    </>
  );
};

export default Apod;
