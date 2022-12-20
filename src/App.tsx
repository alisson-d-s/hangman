import { useEffect, useState } from 'react'
import { LetterButton } from './components/LetterButton'
import { RandomLetterContainer } from './components/RandomLetterContainer';
import { randomWord } from './randomWord';
import { words } from "./words";

type RandomWordProps = {
  letter: string;
  find: boolean;
}[];

type WordsProps = {
  word: string;
  alreadyPicked: boolean;
  correctLetter?: boolean;
}[];

function App() {
  const [wordLetters, setWordLetters] = useState<RandomWordProps>([]);
  const [word, setWord] = useState<WordsProps>(words);

  useEffect(() => {
    const arrayLetters: any[] = [];
    const random = randomWord();
    random.split('').map(letter => {
      arrayLetters.push({
        letter: letter,
        find: false,
      })
    })

    setWordLetters([...arrayLetters]);
  }, []);

  const LetterClick = (letter: string) => {
    setWord(old => old.map(obj => {
      if (obj.word.toUpperCase() === letter.toUpperCase()){
          return {...obj, alreadyPicked: true};
      }

      return obj;
    }))

    setWordLetters(olds => olds.map(obj => {
      if (obj.letter.toUpperCase() === letter.toUpperCase()){
        return {...obj, find: true};
      }

      return obj;
    }))
  };

  return (
    <div>
      <div>
        {wordLetters.map(({ letter, find }, index) => 
        <div>
          <RandomLetterContainer key={`${index}Random`} letter={letter} find={find} ></RandomLetterContainer>
        </div>
        )}
      </div>

      <div>
        {word.map(({ word, alreadyPicked }) => (
          <LetterButton LetterClick={LetterClick} key={word} alreadyPicked={alreadyPicked} letter={word}></LetterButton>
        ))}
      </div>
    </div>
  )
}

export default App
