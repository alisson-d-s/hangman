import { useEffect, useState } from 'react'
import { LetterButton } from '../components/LetterButton'
import { RandomLetterContainer } from '../components/RandomLetterContainer';
import { RandomWord } from '../RandomWord';
import { AllLetters } from "../AllLetters";
import { Message } from '../components/Message';
import { Hangman } from '../components/Hangman';

type RandomWordProps = {
    word: string;
    finished: boolean;
    wrongLetterCount: number;
    failed: boolean;
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
    row: number;
}[];

export const HangmanPage = () => {
    const [randomWord, setRandomWord] = useState<RandomWordProps>({
        word: "",
        finished: false,
        wrongLetterCount: 0,
        failed: false,
        letters: [{
            letter: "",
            found: false,
        }]
    });
    const [letters, setLetters] = useState<LettersProps>([]);

    useEffect(() => {
        ResetLetters();
        setRandomWord({ ...GenerateNewWord() });
    }, []);

    const GetFailCount = () => {
        return letters.filter(x => x.wrongLetter === true).length;
    };

    const FailedCheck = () => {
        const failedLettersPicked = GetFailCount();
        console.log(failedLettersPicked);
        if (failedLettersPicked >= 6) {
            setRandomWord(old => { return { ...old, failed: true } });
        }
    };

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
            if (finished) {
                return { ...olds, finished: true, letters: [...lettersUpdated] };
            }
            return { ...olds, letters: [...lettersUpdated] };
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
        FailedCheck();
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
            wrongLetterCount: 0,
            failed: false,
            letters: GenerateArrayWithLetters(random),
        }
        return newRandomWord;
    };

    const ResetLetters = () => {
        const allLetters = new AllLetters();
        setLetters(allLetters.GetAllLetters());
    };

    return (
        <div className='mainBody'>
            <div className='hangman'>
                <Hangman failCount={GetFailCount()} ></Hangman>
            </div>

            <div>
                <div className='randomWordContainer' >
                    {randomWord.letters.map(({ letter, found }, index) =>
                        <RandomLetterContainer key={`${index}Random`} letter={letter} found={found} ></RandomLetterContainer>
                    )}
                </div>

                <div className='lettersContainer'
                    disabled={randomWord.finished || randomWord.failed}
                >
                    <div className="lettersFirstRow" >
                        {
                            letters.filter(x => x.row === 1).map(({ letter, alreadyPicked }) => (
                                <LetterButton LetterClick={LetterClick} key={letter} alreadyPicked={alreadyPicked} letter={letter}></LetterButton>
                            ))
                        }
                    </div>
                    <div className="lettersSecondtRow" >
                        {
                            letters.filter(x => x.row === 2).map(({ letter, alreadyPicked }) => (
                                <LetterButton LetterClick={LetterClick} key={letter} alreadyPicked={alreadyPicked} letter={letter}></LetterButton>
                            ))
                        }
                    </div>
                    <div className="lettersThirdRow" >
                        {
                            letters.filter(x => x.row === 3).map(({ letter, alreadyPicked }) => (
                                <LetterButton LetterClick={LetterClick} key={letter} alreadyPicked={alreadyPicked} letter={letter}></LetterButton>
                            ))
                        }
                    </div>
                </div>

                <div className='wrongWordContainer' >
                    {
                        letters.map(({ letter, wrongLetter }, index) => {
                            return wrongLetter
                                ? <h5 key={`wrong-${index}`}>{letter}</h5>
                                : "";
                        })
                    }
                </div>

                <div>
                    <Message failed={randomWord.failed} sucess={randomWord.finished} ></Message>
                </div>

                <div>
                    <button onClick={() => {
                        setRandomWord({ ...GenerateNewWord() });
                        ResetLetters();
                    }} >
                        New Game
                    </button>
                </div>
            </div>
        </div>
    );
};
