import React, { useState } from "react";
import background from "../images/quizBackground.jpg";

const data = [
  {
    id: 1,
    question:
      "The existence of black holes was predicted by which eminent scientist’s ‘Theory of General Relativity’?",
    answers: [
      {
        text: "Issac Newton",
        correct: false,
      },
      {
        text: "Albert Einstien",
        correct: true,
      },
      {
        text: "Robert Hook",
        correct: false,
      },
      {
        text: "Gallieo Gallie",
        correct: false,
      },
    ],
  },
  {
    id: 1,
    question: "After the Moon, what is the brightest object in the night sky?",
    answers: [
      {
        text: "Venus",
        correct: true,
      },
      {
        text: "Betelgeuse",
        correct: false,
      },
      {
        text: "Pole Star",
        correct: false,
      },
      {
        text: "International Space Station",
        correct: false,
      },
    ],
  },
  {
    id: 1,
    question:
      "The main asteroid belt in our solar system lies between the orbits of which 2 planets?",
    answers: [
      {
        text: "Jupiter and Mars",
        correct: true,
      },
      {
        text: "Mercury and Venus",
        correct: false,
      },
      {
        text: "Uranus and Neptune",
        correct: false,
      },
      {
        text: "Earth and Venus",
        correct: false,
      },
    ],
  },
  {
    id: 1,
    question:
      " Dwarf planets are smaller planets with similar objects present in their orbit of the sun. Which of the options below are dwarf planets in our Solar System?",
    answers: [
      {
        text: "Mercury and Pluto",
        correct: false,
      },
      {
        text: "Ceres and Europa",
        correct: false,
      },
      {
        text: "Ceres and Pluto",
        correct: true,
      },
      {
        text: "Mercury and the Moon",
        correct: false,
      },
    ],
  },
  {
    id: 1,
    question:
      "Our planet sits within the Solar System which sits within a galaxy. What is this galaxy called?",
    answers: [
      {
        text: "Andromeda Galaxy",
        correct: false,
      },
      {
        text: "Cigar Galaxy",
        correct: true,
      },
      {
        text: "Eye of Sauron",
        correct: false,
      },
      {
        text: "Milky Way",
        correct: false,
      },
    ],
  },
];

const Results = (props) => {
  return (
    <div className="text-3xl text-white flex justify-center p-5  items-center">
      <div
        className="h-[720px] flex items-center space-y-6 w-[900px] justify-center flex-col"
        style={{ background: `url(${background})` }}
      >
        <div className=" text-5xl font-medium">Results</div>
        {props.correctAnswers > 3 ? (
          <div className="p-8 rounded-lg">
            Congratulations, you have scored {props.correctAnswers} in your
            Quiz.
          </div>
        ) : (
          <div className="p-8 rounded-lg">
            You have scored {props.correctAnswers} in your Quiz. Try harder next
            time!
          </div>
        )}
      </div>
    </div>
  );
};

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  // const [quizStarted, setQuizStarted] = useState(false);

  const questionNumberhandler = () => {
    setQuestionNumber(questionNumber + 1);
    if (questionNumber >= data.length - 1) {
      setIsQuizFinished(true);
    }
    console.log(questionNumber, data.length);
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setCorrectAnswers(correctAnswers + 1);
    }
    console.log(correctAnswers);
  };

  return (
    <div id="quiz" className=" text-white">
      {isQuizFinished ? (
        <div>
          <Results correctAnswers={correctAnswers} />
        </div>
      ) : (
        <div
          style={{ background: `url(${background})` }}
          className=" flex flex-col items-center space-y-8 justify-center text-5xl font-medium bg-[#ECF2FF] py-10 rounded-lg text-white  md:mx-[20%]"
        >
          <div className="">Astronomy Quiz</div>
          <div className=" text-4xl text-center">
            {data[questionNumber].question}
          </div>
          <div className=" flex justify-center flex-wrap text-center">
            {data[questionNumber].answers.map((answer) => (
              <div
                className={`${
                  selectedAnswer === answer
                    ? "bg-blue-400 "
                    : "bg-[#3E54AC] hover:text-[#3E54AC] hover:bg-white hover:border-[#3E54AC]"
                      } text-3xl cursor-pointer  rounded-lg px-4 py-2 m-2 w-1/3 text-center min-h-40 text-white
                        border-4`}
                onClick={() => handleClick(answer)}
              >
                {answer.text}
              </div>
              
            ))}
          </div>
          <button
            className="text-3xl px-2 bg-[#22b431] rounded-lg py-3 text-white hover:text-[#22b431] hover:bg-white hover:border-[#22b431] border-4"
            onClick={questionNumberhandler}
          >
            Select
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
