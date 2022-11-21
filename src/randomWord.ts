const Words = [
    "Rat",
    "Street",
    "Home",
    "Computer"
];

export const randomWord = (): string => {
    const word = Words[Math.floor(Math.random()*Words.length)];
    
    return word;
};
