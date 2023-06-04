import { useState, useEffect } from 'react'
import './App.css'

import Question from './components/Question'
import { nanoid } from 'nanoid'

function App() {
  const [questions, setQuestions] = useState([])

  // https://opentdb.com/api.php?amount=5&type=multiple

  async function getData() {
    const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    // console.log(data.results);
    setQuestions(data.results);
  }

  // console.log(questions);
  const allQuestions = questions.map((question) => {

    const allAnswers = [...question.incorrect_answers];
    const randomNum = Math.floor(Math.random() * (allAnswers.length + 1));
    allAnswers.splice(randomNum, 0, question.correct_answer);


    return (<Question
      key={nanoid()}
      question={question.question}
      allAnswers={allAnswers}
      // correct_answer={question.correct_answer}
      // incorrect_answers={question.incorrect_answers}
    />)
  });
  console.log(allQuestions);





  return (
    <main> {questions.length !== 0 ?
      <div>
        {allQuestions}
        <button className="check">Check answers</button>
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
