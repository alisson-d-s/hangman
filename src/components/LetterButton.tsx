type LetterButtonProps = {
    letter: string;
    alreadyPicked: boolean;
    correctLetter?: boolean;
    LetterClick: (letter: string) => void;
};

export const LetterButton = ({letter, alreadyPicked, correctLetter, LetterClick}: LetterButtonProps) => {
    return (
        <button onClick={() => LetterClick(letter)} disabled={alreadyPicked} >{letter}</button>
    );
};
