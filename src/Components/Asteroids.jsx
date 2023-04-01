import { useQuery } from "@tanstack/react-query";
import { Loader } from "react-feather";
import { useState } from "react";

import asteroids_image from '../images/asteroids_background.webp'
import DatePicker from "./DatePicker";
import Navbar from "./Navbar";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

const AsteroidCard = (props) => {
  const newdata = useQuery({
    queryKey: ["asteroid"],
    queryFn: () =>
      fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${props.date}&end_date=${props.date}&api_key=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

  const asteroidsForDate = newdata.data?.near_earth_objects?.[props.date] ?? [];

  if (newdata.isLoading || asteroidsForDate.length === 0) {

    return (
      <div className="text-5xl font-bold text-white flex flex-col justify-center space-y-5 my-10">
        <div className="text-center">Please wait the data is being loaded</div>
        <Loader className=" self-center animate-spin my-10" size={60}></Loader>
      </div>
    );
  }

  if (newdata.error) {
    return <div>error</div>;
  }
  console.log(newdata.data);
  return (
    <>
      <div className="px-28 py-2 bg-gray-900 md:mx-16 rounded-lg flex flex-col justify-center items-center bg-fixed"
      style={{backgroundImage: `url(${asteroids_image})`, backgroundSize: 'cover'}}>
        <div className="text-3xl text-white mb-5">
          The asteroids close to Earth on {props.date} are:
        </div>
        <div className="flex flex-col space-y-3 text-white">
          {asteroidsForDate.map((item) => (
            <div className="px-10 py-2 bg-gray-700 rounded-lg w-[50vw]">
              <div className="text-2xl font-bold">
                Name: {item.name} ({item.id})
              </div>
              <div className="text-lg">
                Estimated diameter min:{" "}
                {Math.floor(item.estimated_diameter.meters.estimated_diameter_min)} m
              </div>
              <div className="text-lg">
                Estimated diameter max:{" "}
                {Math.floor(item.estimated_diameter.meters.estimated_diameter_max)} m
              </div>
              <div className="text-lg">
                {item.is_potentially_hazardous_asteroid ? (
                  <div className="text-red-500 font-bold">It is dangerous</div>
                ) : (
                  <div className="text-green-500 font-bold">It is not dangerous</div>
                )}
              </div>
              <div className="text-lg">
                Close approach date: {item.close_approach_data[0].close_approach_date}
              </div>
              <div className="text-lg">
                Miss distance: {Math.floor(item.close_approach_data[0].miss_distance.kilometers)} km
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
};

const Asteroids = () => {

  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + (month) + "-" + (day);
  const [date, setDate] = useState(today);

  return (
    <div className="bg-black flex justify-center flex-col">
      <Navbar />
      <DatePicker
        onDatePicked={(enteredDate) => {
          setDate(enteredDate);
        }}
      />
      <AsteroidCard date={date} />
    </div>
  );
};

export default Asteroids;
