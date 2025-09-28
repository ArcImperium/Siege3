import {useState, useEffect} from 'react'
import './App.css'
import Home from './Home.jsx'
import QuestionManager from './QuestionManager.jsx'
import ReviewQuestions from './ReviewQuestions.jsx'

function App() {  
  useEffect(() => {
    document.title='Questionizer 5200'
  }, [])

  const [windownum, setWindownum] = useState(0)

  function handlewindow() {
    if (windownum === 0) {
      return(<Home setWindownum={setWindownum}/>)
    }
    else if (windownum === 1) {
      return(<QuestionManager setWindownum={setWindownum}/>)
    }
    else if (windownum === 2) {
      return(<ReviewQuestions setWindownum={setWindownum}/>)
    }
    else {
      return(<div>Error</div>)
    }
  }

  return (
    handlewindow()
  )
}

export default App
