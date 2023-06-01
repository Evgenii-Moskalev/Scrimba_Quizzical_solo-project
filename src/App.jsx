import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Question from './components/Question'

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
  const allQuestions = questions.map((question, index) => {
    return (<Question key={index} question={question} />)
  });
  // console.log(allQuestions);





  return (
    <main> {questions.length !== 0 ?
      <div>
        {allQuestions}
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
