import JokeCard from "@/components/JokeCard";
import { Joke } from "@/lib/type";
import { render, screen, fireEvent } from "@testing-library/react";

describe('JokeCard', () => {

    test('render successfully', () => {

        const jokes: Joke[] = [{
            question: "Q1",
            answer: "A1"
        }];
        render(<JokeCard page={0} jokes={jokes} />);

        const questionEl = screen.getByRole('heading', { level: 2 });
        expect(questionEl).toBeInTheDocument();
    });

});