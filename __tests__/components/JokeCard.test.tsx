import JokeCard from "@/components/JokeCard";
import { Joke } from "@/lib/type";
import { render, screen, fireEvent } from "@testing-library/react";

describe('JokeCard', () => {

    const jokes: Joke[] = [{
        question: "Q1",
        answer: "A1"
    }];

    test("Question is rendered", () => {
        render(<JokeCard page={0} jokes={jokes} />);
        const question = screen.getByText("Q1");
        expect(question).toBeInTheDocument();
    });

});