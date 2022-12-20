import hangman_0 from "../assets/hangmanImages/hangman_0.svg";
import hangman_1 from "../assets/hangmanImages/hangman_1.svg";
import hangman_2 from "../assets/hangmanImages/hangman_2.svg";
import hangman_3 from "../assets/hangmanImages/hangman_3.svg";
import hangman_4 from "../assets/hangmanImages/hangman_4.svg";
import hangman_5 from "../assets/hangmanImages/hangman_5.svg";

type HangmanProps = {
    failCount: number
};

export const Hangman = ({ failCount }: HangmanProps) => {
    if (failCount === 0) {
        return (
            <div>
                <img src={hangman_0}></img>
            </div>
        );
    }
    if (failCount === 1) {
        return (
            <div>
                <img src={hangman_1}></img>
            </div>
        );
    }
    if (failCount === 2) {
        return (
            <div>
                <img src={hangman_2}></img>
            </div>
        );
    }if (failCount === 3) {
        return (
            <div>
                <img src={hangman_3}></img>
            </div>
        );
    }
    if (failCount === 4) {
        return (
            <div>
                <img src={hangman_4}></img>
            </div>
        );
    }
    if (failCount === 5) {
        return (
            <div>
                <img src={hangman_5}></img>
            </div>
        );
    }
    return <h1></h1>
};
