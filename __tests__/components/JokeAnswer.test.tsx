import JokeAnswer from "@/components/JokeAnswer";
import { Joke } from "@/lib/type";
import { fireEvent, render, screen } from "@testing-library/react";

describe('JokeAnswer', () => {
    const joke: Joke = {
        question: "Q1",
        answer: "A1"
    }
    test('render successfully', () => {
        render(<JokeAnswer joke={joke} />);

        const buttonElem = screen.getByRole("button");

        expect(buttonElem).toBeInTheDocument();
    });
    test('display answer when user click the button', async () => {
        render(<JokeAnswer joke={joke} />);
        const buttonElem = screen.getByText("Tell me");
        fireEvent.click(buttonElem);
        const answerEl = screen.getByRole("heading", { level: 1 });
        expect(answerEl).toBeInTheDocument();
    });
});