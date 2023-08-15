import { useState } from "react"
import words from "./wordList.json"


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random()* words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<String[]>([])
  console.log(wordToGuess)
  return <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column"
  }}>

  </div>
  
  
}

export default App
