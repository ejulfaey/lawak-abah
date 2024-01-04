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
        if (value) setErrors(prev => ({ ...prev, [name]: false }));
        else setErrors(prev => ({ ...prev, [name]: true }));
        setJoke(prev => ({ ...prev, [name]: value }));
    }

    const allFieldsFilled = Object.values(errors).every((err) => err === false);

    return (
        <JokeDialog title="Post a joke" onOk={onOk} onClose={onClose}>
            <form onSubmit={onSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
                <div>
                    <textarea
                        value={joke.question}
                        name="question"
                        onChange={onChange}
                        placeholder="Your Question?"
                        className={`${(attemptSubmission && errors.question) ? 'border-red-400 focus:ring-red-500' : 'border-black/40 focus:ring-blue-500'} px-4 py-2 block w-full bg-gray-900/50 border rounded-lg focus:outline-none focus:ring-2`}></textarea>
                </div>
                <div>
                    <input
                        value={joke.answer}
                        name="answer"
                        onChange={onChange}
                        placeholder="Your answer?"
                        className={`${(attemptSubmission && errors.answer) ? 'border-red-400 focus:ring-red-500' : 'border-black/40 focus:ring-blue-500'} px-4 py-2 block w-full bg-gray-900/50 border rounded-lg focus:outline-none focus:ring-2`} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Post</Button>
            </form>
        </JokeDialog>
    );
};

export default PostJokeDialog;