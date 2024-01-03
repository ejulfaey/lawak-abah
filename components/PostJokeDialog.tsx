import { FormEvent, useState } from "react";
import JokeDialog from "./JokeDialog";
import { Joke } from "@/lib/type";
import { Button } from "./ui/button";

type Props = {
    onClose: () => void;
    onOk: (data: Joke) => void;
}

const PostJokeDialog = ({ onClose, onOk }: Props) => {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onOk({
            question: 'Question 1',
            answer: 'Answer 1',
        });

    }

    return (
        <JokeDialog title="Post a joke" onOk={onOk} onClose={onClose}>
            <form onSubmit={onSubmit} className="p-4 md:p-6 space-y-4 md:space-y-6">
                <textarea placeholder="Your Question?" className="px-4 py-2 block w-full bg-gray-900/50 border border-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <input type="text" placeholder="Your answer?" className="px-4 py-2 block w-full bg-gray-900/50 border border-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Post</Button>
            </form>
        </JokeDialog>
    );
};

export default PostJokeDialog;