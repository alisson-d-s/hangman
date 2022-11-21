import { useEffect, useState } from 'react'
import { LetterButton } from './components/LetterButton'
import { randomWord } from './randomWord';

function App() {
  const [letters, setLetters] = useState(['']);
  const [wordLetters, setWordLetters] = useState(['']);

  useEffect(() => {
    setLetters([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ]);
    
    setWordLetters([...randomWord()]);
  }, []);

  return (
    <div>
      <div>
        {wordLetters}
      </div>

      <div>
        {letters.map((letter) => (
          <LetterButton key={letter} letter={letter}></LetterButton>
        ))}
      </div>
    </div>
  )
}

export default App
