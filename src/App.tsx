import { useEffect, useState } from 'react'
import { LetterButton } from './components/LetterButton'
import { RandomLetterContainer } from './components/RandomLetterContainer';
import { RandomWord } from './RandomWord';
import { AllLetters } from "./AllLetters";
import "./default.css";

type RandomWordProps = {
  word: string;
  finished: boolean;
  letters: {
    letter: string;
    found: boolean;
  }[];
};

type RandomWordLettersProps = {
  letter: string;
  found: boolean;
}[];

type LettersProps = {
  letter: string;
  alreadyPicked: boolean;
  wrongLetter: boolean;
}[];

function App() {
  const [randomWord, setRandomWord] = useState<RandomWordProps>({
    word: "",
    finished: false,
    letters: [{
      letter: "",
      found: false,
    }]
  });
  const [letters, setLetters] = useState<LettersProps>([]);

  useEffect(() => {
    setLetters([...AllLetters]);
    setRandomWord({ ...GenerateNewWord() });
  }, []);

  useEffect(() => {
    //console.log(letters);
  }, [randomWord]);

  const LetterClick = (letter: string) => {
    setRandomWord(olds => {
      let finished = true;
      const lettersUpdated = olds.letters.map(obj => {
        if (obj.letter.toUpperCase() === letter.toUpperCase()) {
          return { ...obj, found: true }
        }

        if (!obj.found) {
          finished = false;
        }

        return obj;
      });
      return finished
        ? { ...olds, finished: true, letters: [...lettersUpdated] }
        : { ...olds, letters: [...lettersUpdated] }
    });
    const lettersCopy = [...letters];
    if (randomWord.letters.find(word => word.letter.toUpperCase() === letter.toUpperCase())) {
      lettersCopy
        .filter(letterAux => letterAux.letter.toUpperCase() === letter.toUpperCase())
        .forEach(x => x.alreadyPicked = true)
    }
    else {
      lettersCopy
        .filter(letterAux => letterAux.letter.toUpperCase() === letter.toUpperCase())
        .forEach(x => { x.alreadyPicked = true; x.wrongLetter = true })
    }
    setLetters([...lettersCopy]);
  };

  const GenerateArrayWithLetters = (word: string) => {
    const arrayLetters: RandomWordLettersProps = [];
    word.split('').map(letter => {
      arrayLetters.push({
        letter: letter,
        found: false,
      })
    });
    return arrayLetters;
  };

  const GenerateNewWord = () => {
    const random = RandomWord();
    const newRandomWord: RandomWordProps = {
      word: random,
      finished: false,
      letters: GenerateArrayWithLetters(random),
    }
    return newRandomWord;
  };

  const ResetLetters = () => {
    setLetters([...AllLetters]);
  };

  return (
    <div>
      <div className='RandomWordContainer' >
        {randomWord.letters.map(({ letter, found }, index) =>
          <RandomLetterContainer key={`${index}Random`} letter={letter} found={found} ></RandomLetterContainer>
        )}
      </div>

      <div disabled={randomWord.finished} >
        {letters.map(({ letter, alreadyPicked}) => (
          <LetterButton LetterClick={LetterClick} key={letter} alreadyPicked={alreadyPicked} letter={letter}></LetterButton>
        ))}
      </div>

      <div>
        <button onClick={() => {
          setRandomWord({ ...GenerateNewWord() });
          ResetLetters();
        }} >
          Novo Jogo
        </button>
      </div>

      <div className='RandomWordContainer' >
        {
          randomWord.letters.map(({ letter }, index) => (
            <div key={`word-${index}`}>
              <h5>{letter}</h5>
            </div>
          ))
        }
      </div>

      <div className='RandomWordContainer' >
        {
          letters.map(({ letter, wrongLetter }, index) => {
            return wrongLetter
              ? <h5 key={`wrong-${index}`}>{letter}</h5>
              : "";
          })
        }
      </div>
    </div>
  )
}

export default App
