import {useState} from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const questions = [
    {
        questionText: "Qual o idiomafalado no Brasil?",
        answerOptions: [
            {answerText: "Português", isCorrect: true},
            {answerText: "Inglês", isCorrect: false},
            {answerText: "Francês", isCorrect: false},
            {answerText: "Alemão", isCorrect: false},
        ],
    },
    {
        questionText:
            "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
        answerOptions: [
            {answerText: "Japão e Serra Leoa", isCorrect: true},
            {answerText: "Austrália e Afeganistã", isCorrect: false},
            {answerText: "Itália e Chade", isCorrect: false},
            {answerText: "Brasil e Congo", isCorrect: false},
        ],
    },
    {
        questionText: "Qual empresa criou o Iphone?",
        answerOptions: [
            {answerText: "Apple", isCorrect: true},
            {answerText: "Intel", isCorrect: false},
            {answerText: "Amazon", isCorrect: false},
            {answerText: "Microsoft", isCorrect: false},
        ],
    },
    {
        questionText: "Como aprender a programar?",
        answerOptions: [
            {answerText: "Praticando o que se aprende", isCorrect: true},
            {answerText: "Vendo vídeo", isCorrect: false},
            {answerText: "Lendo", isCorrect: false},
            {answerText: "Dormindo", isCorrect: false},
        ],
    },
];

function App() {

    const [state, setState] = useState({
        score: 0,
        wrongScore: 0,
        currentQuestion: 0,
        showScore: false,
    })




    function handleAnswer(isCorrect) {
        let updateState = {...state}
        if (isCorrect) {
            updateState.score += 1
        } else {
            updateState.wrongScore = updateState.wrongScore + 1
        }

        const nextQuestion = updateState.currentQuestion + 1;
        if (nextQuestion < questions.length) {
            updateState.currentQuestion = nextQuestion
        } else {
            updateState.showScore = true
        }

        setState(updateState)
    }


    return (
        <div className="container">
            <ProgressBar
                score={state.score}
                wrongScore={state.wrongScore}
                totalQuestion={questions.length}

            />

            <div className="question-card">
                {state.showScore ? (
                    <div className="score-section">
                        <h4>
                            Você pontuou {state.score} de {questions.length}
                        </h4>
                        <h4>
                            Wrong {state.wrongScore} of {questions.length}
                        </h4>
                    </div>
                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Questão {state.currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">
                                {questions[state.currentQuestion].questionText}
                            </div>
                        </div>

                        <div className="answer-section">
                            {questions[state.currentQuestion].answerOptions.map(
                                (answerOption, index) => (
                                    <button
                                        onClick={() => handleAnswer(answerOption.isCorrect)}
                                        key={index}
                                    >
                                        {answerOption.answerText}
                                    </button>
                                )
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
