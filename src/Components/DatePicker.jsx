import { useState } from "react";

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
      <div className=" text-4xl text-white text-center pt-5">
        CHOOSE THE DATE
      </div>
      <DateError
        className={` transition-all duration-500 ${
          isDateValid ? "mt-[-1500px]" : "mt-[-5000px]"
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

export default DatePicker