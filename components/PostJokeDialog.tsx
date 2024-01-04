import { ChangeEvent, FormEvent, useState } from "react";
import JokeDialog from "./JokeDialog";
import { Joke } from "@/lib/type";
import { Button } from "./ui/button";

type Props = {
    onClose: () => void;
    onOk: (data: Joke) => void;
}

type JokeErrors = Partial<Joke>

const PostJokeDialog = ({ onClose, onOk }: Props) => {

    const [errors, setErrors] = useState<JokeErrors>({
        answer: true,
        question: true
    });
    const [joke, setJoke] = useState<Joke>({
        answer: '',
        question: ''
    });
    const [attemptSubmission, setAttemptSubmission] = useState<boolean>(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAttemptSubmission(true);
        (attemptSubmission && allFieldsFilled) ? onOk(joke) : console.log('Insert all required fields!');
    }

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (value) {
            setAttemptSubmission(true);
            setErrors(prev => ({ ...prev, [name]: false }));
        }
        else setErrors(prev => ({ ...prev, [name]: true }));
        setJoke(prev => ({ ...prev, [name]: value }));
    }

    const allFieldsFilled = Object.values(errors).every((err) => err === false);

    return (
        <JokeDialog title="Post a joke" onOk={onOk} onClose={onClose}>
            <form onSubmit={onSubmit} className="p-4 md:p-6">
                <div className="space-y-4">
                    <textarea
                        value={joke.question}
                        name="question"
                        onChange={onChange}
                        placeholder="Your question?"
                        className={`${(attemptSubmission && errors.question) ? 'border-red-400 focus:ring-red-500' : 'border-black/40 focus:ring-blue-500'} px-4 py-2 block w-full bg-gray-300 text-gray-800 border rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2`}></textarea>
                    <input
                        value={joke.answer}
                        name="answer"
                        onChange={onChange}
                        placeholder="Your answer?"
                        className={`${(attemptSubmission && errors.question) ? 'border-red-400 focus:ring-red-500' : 'border-black/40 focus:ring-blue-500'} px-4 py-2 block w-full bg-gray-300 text-gray-800 border rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2`} />
                </div>
                <Button
                    disabled={!(attemptSubmission && allFieldsFilled)}
                    className="mt-6 px-4 py-2 leading-6 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800">
                    Post
                </Button>
            </form>
        </JokeDialog>
    );
};

export default PostJokeDialog;