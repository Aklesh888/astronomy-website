import { useQuery } from "@tanstack/react-query";
import { Loader } from "react-feather";

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

  if (newdata.isLoading) {
    return (
      <div className="text-5xl font-bold text-white flex flex-col justify-center space-y-5 my-10">
        <div className="text-center">
          Please wait the data is being loaded
        </div>
        <Loader className=" self-center animate-spin my-10" size={60}></Loader>
      </div>
    );
  }

  if (newdata.error) {
    return <div>error</div>;
  }

  return (
    <>
      <div className=" px-4 py-2 bg-[#000000] text-white mx-[5%]">
        <div className=" text-3xl mb-5">
          The asteroids close to Earth on {props.date} are
        </div>
        <div className="flex flex-col space-y-3">
          {newdata.data.near_earth_objects[props.date].map((item) => (
            <div className="text-2xl px-3 py-2 bg-[#262A56] rounded-lg justify-center flex space-y-2 flex-col">
              <div className="">Name: {item.name}</div>
              <div className="">
                Estimated diameter min:{" "}
                {Math.floor(
                  item.estimated_diameter.meters.estimated_diameter_min
                )}{" "}
                m
              </div>
              <div className="">
                Estimated diameter max:{" "}
                {Math.floor(
                  item.estimated_diameter.meters.estimated_diameter_max
                )}{" "}
                m
              </div>
              <div className="">
                {item.is_potentially_hazardous_asteroid ? (
                  <div>It is dangerous </div>
                ) : (
                  <div>It is not dangerous</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Asteroids = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <AsteroidCard date="2020-02-02" />
    </div>
  );
};

export default Asteroids;
