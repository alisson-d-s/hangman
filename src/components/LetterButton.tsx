type LetterButtonProps = {
    letter: string;
};

export const LetterButton = ({letter}: LetterButtonProps) => {
    return (
        <button>{letter}</button>
    );
};
