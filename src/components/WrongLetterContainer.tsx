type WrongLetterProps = {
    letter: string;
};

export const WrongLetterContainer = ({ letter }: WrongLetterProps) => {
    return (
        <h5>{letter}</h5>
    );
};
