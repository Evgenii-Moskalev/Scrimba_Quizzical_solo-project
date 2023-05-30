import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [questions, setQuestions] = useState(false)

  // https://opentdb.com/api.php?amount=5&type=multiple

  return (
    <main> {questions ?
      <div>
        <h2>Hi</h2>
      </div>
      :
      <div>
        <h1>Quizzical</h1>
        <p>Choose correct answer</p>
        <button>Start quiz</button>
      </div>
    }
    </main>
  )
}

export default App
