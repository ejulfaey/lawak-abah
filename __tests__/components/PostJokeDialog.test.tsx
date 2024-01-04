import PostJokeDialog from "@/components/PostJokeDialog";
import { fireEvent, render, screen } from "@testing-library/react";

describe("PostJokeDialog", () => {

    const props = {
        onClose: jest.fn(),
        onOk: jest.fn(),
    }

    test("render correctly", () => {
        render(<PostJokeDialog {...props} />);

        const questionEl = screen.getByPlaceholderText("Your question?");
        expect(questionEl).toBeInTheDocument();

        const answerEl = screen.getByPlaceholderText("Your answer?");
        expect(answerEl).toBeInTheDocument();

        const buttonEl = screen.getByText("Post");
        expect(buttonEl).toBeInTheDocument();

    });

    test("Display error border when submitting without filling fields", () => {
        render(<PostJokeDialog {...props} />);

        const questionEl = screen.getByPlaceholderText("Your question?");
        const answerEl = screen.getByPlaceholderText("Your answer?");
        const buttonEl = screen.getByText("Post");

        fireEvent.submit(buttonEl);

        expect(questionEl).toHaveClass("border-red-400");
        expect(answerEl).toHaveClass("border-red-400");
        expect(props.onClose).not.toBeCalled();

    });

    test("Calls onOk when required fields are filled", () => {
        render(<PostJokeDialog {...props} />);

        const questionEl = screen.getByPlaceholderText("Your question?");
        const answerEl = screen.getByPlaceholderText("Your answer?");
        const buttonEl = screen.getByText("Post");

        fireEvent.change(questionEl, {
            target: { value: "Test Question" },
        });

        fireEvent.change(answerEl, {
            target: { value: "Test Answer" },
        });

        fireEvent.submit(buttonEl);

        expect(props.onOk).toHaveBeenCalledWith({
            question: "Test Question",
            answer: "Test Answer"
        });
    });

});