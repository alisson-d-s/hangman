const Words = [
    "Rat",
    "Street",
    "Home",
    "Computer",
    "Tortoise",
    "Television",
    "Mother",
    "Animal",
];

export const RandomWord = (): string => {
    const word = Words[Math.floor(Math.random()*Words.length)];
    
    return word;
};
