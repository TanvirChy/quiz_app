import React, { useContext } from "react";
import { QuizContext } from "../GlobalStore/QuizContext";
import '../App.css'

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
            setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
