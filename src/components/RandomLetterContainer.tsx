type RandomLetterProps = {
    letter: string;
    find: boolean;
};

export const RandomLetterContainer = ({letter, find}: RandomLetterProps) => {
    if (find) {
        return <div><h1>{letter}</h1></div>
    }
    return <div></div>
};
