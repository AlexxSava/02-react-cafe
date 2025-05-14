import { useState } from 'react'
import css from "./App.module.css"
import CafeInfo from "../CafeInfo"


function App() {
  const [feedback, setFeedback] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  function handleVote(type: VoteType) {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
    });
  }  

  return (
    <>
      <div className={css.app}></div>

    </>
  )
}

export default App
