import JokeAnswer from "@/components/JokeAnswer";
import { Joke } from "@/lib/type";
import { fireEvent, render, screen } from "@testing-library/react";

describe('JokeAnswer', () => {
    test('render successfully', () => {
        const joke: Joke = {
            question: "Q1",
            answer: "A1"
        }
        render(<JokeAnswer joke={joke} />);

        const buttonElem = screen.getByRole("button");

        expect(buttonElem).toBeInTheDocument();
    });
    test('render when toggle: true', async () => {
        const joke: Joke = {
            question: "Q1",
            answer: "A1"
        }
        render(<JokeAnswer joke={joke} />);

        const buttonElem = screen.getByRole("button");

        // await userEvent.click(buttonElem);
        fireEvent.click(buttonElem);
        const answerEl = screen.getByRole("heading", { level: 1 });

        expect(answerEl).toBeInTheDocument();
    });
});