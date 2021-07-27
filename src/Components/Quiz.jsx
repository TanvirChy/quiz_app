import React, { useContext, useState } from "react";
import { Questions } from "../GlobalStore/QuestionBank";
import { QuizContext } from "../GlobalStore/QuizContext";
const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>

      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button style={{backgroundColor:'red',color:'black'}} onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button style={{backgroundColor:'green',color:'black'}} onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
