type RandomLetterProps = {
    letter: string;
    found: boolean;
};

export const RandomLetterContainer = ({letter, found}: RandomLetterProps) => {
    return found 
        ? (<div><h1>{letter}</h1></div>)
        : (<div><h1>_</h1></div>)
};
