import { hangman_0, hangman_1, hangman_2, hangman_3, hangman_4, hangman_5, hangman_6 } from "../assets/hangmanImages/index";

type HangmanProps = {
    failCount: number
};

const GetImage = (failCount: number): string => {
    switch (failCount) {
        case 0:
            return hangman_0;
        case 1:
            return hangman_1;
        case 2:
            return hangman_2;
        case 3:
            return hangman_3;
        case 4:
            return hangman_4;
        case 5:
            return hangman_5;
        case 6:
            return hangman_6;
        default:
            return hangman_0;
    }
};

export const Hangman = ({ failCount }: HangmanProps) => {
    const hangman = GetImage(failCount);

    return (
        <div>
            <img src={hangman} ></img>
        </div>
    );
};
