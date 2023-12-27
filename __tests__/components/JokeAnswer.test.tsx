import JokeAnswer from "@/components/JokeAnswer";
import { Joke } from "@/lib/type";
import { fireEvent, render, screen } from "@testing-library/react";

describe('JokeAnswer', () => {
    const joke: Joke = {
        question: "Q1",
        answer: "A1"
    }

    test("render 'Tell me' button", () => {
        render(<JokeAnswer joke={joke} />);
        const buttonElem = screen.getByText("Tell me");
        expect(buttonElem).toBeInTheDocument();
    });

    test("Answer is not rendered", () => {
        render(<JokeAnswer joke={joke} />);
        const answer = screen.queryByRole("heading", { level: 1 });
        expect(answer).not.toBeInTheDocument();
    });

    test("display 'A1' when user click the 'Tell me' button", async () => {
        render(<JokeAnswer joke={joke} />);
        const buttonElem = screen.getByText("Tell me");
        fireEvent.click(buttonElem);
        const answer = screen.getByText("A1");
        expect(answer).toBeInTheDocument();
    });

});