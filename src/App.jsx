import { useState, useEffect } from 'react'
import './App.css'

import Question from './components/Question'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities';



function App() {
  const [questions, setQuestions] = useState([])
  const [allQuestions, setAllQuestions] = useState([])
  const [chosenAnswer, setChosenAnswer] = useState({})
  const [endGame, setEndGame] = useState(false)
  const [counter, setCounter] = useState(0)


  async function getData() {
    const response = await fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple');

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();

    setQuestions(data.results);
    setEndGame(false)
    setCounter(0)
    setChosenAnswer({})
  }

  useEffect(() => {
    const listOfQuestions = questions.map((question) => {

      const allAnswers = [...question.incorrect_answers];
      const randomNum = Math.floor(Math.random() * (allAnswers.length + 1));
      allAnswers.splice(randomNum, 0, question.correct_answer);
      const id = nanoid();

      return (<Question
        key={id}
        id={id}
        question={question.question}
        allAnswers={allAnswers}
        collectAnswers={collectAnswers}
        correctAnswer={question.correct_answer}

      />)
    });
    setAllQuestions(listOfQuestions)

  }, [questions])


  function collectAnswers(e, id) {
    setChosenAnswer((prevState) => {
      return {
        ...prevState,
        [id]: e.target.nextSibling.data
      }
    })
  }

  function compareAnswers() {
    for (let i = 0; i < allQuestions.length; i++) {
      for (const [chosenID, chosenValue] of Object.entries(chosenAnswer)) {
        if (allQuestions[i].props.id === chosenID && (decode(allQuestions[i].props.correctAnswer) === chosenValue)) {
          setCounter((counter) => counter + 1);
          let answerIsCorrect = findElem(decode(allQuestions[i].props.correctAnswer), i);
          answerIsCorrect.className = 'green';
          break;
        } else {
          let answerIsInCorrect = findElem(decode(allQuestions[i].props.correctAnswer), i);
          answerIsInCorrect.className = 'red';
        }
      }
      setEndGame(true)
    }
  }


  function findElem(chosenValue, start) {
    start = (start * 4);
    const allLabels = document.getElementsByTagName('label');
    let searchText = chosenValue;
    let found = '';
    for (let i = start; i < allLabels.length; i++) {
      if (allLabels[i].textContent === searchText) {
        found = allLabels[i];
        break;
      }
    }
    return found;
  }

  return (
    <main> {questions.length !== 0 ?
      <div>
        {allQuestions}
        {endGame && <span className='youScored'>You scored {counter}/5 correct answers</span>}
        <button className="check" onClick={endGame ? getData : compareAnswers}>{endGame ? "Play Again" : "Check answers"}</button>
      </div>
      :
      <div>
        <h1>Quizzical</h1>
        <p>Choose correct answer</p>
        <button onClick={getData}>Start quiz</button>
      </div>
    }
    </main>
  )
}

export default App
