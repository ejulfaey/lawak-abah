import { useState } from "react";
import JokeDialog from "./JokeDialog";

type Props = {
    onClose: () => void;
    onOk: () => void;
}

const PostJokeDialog = ({ onClose, onOk }: Props) => {

    return (
        <JokeDialog title="Post a joke" onOk={onOk} onClose={onClose}>
            <form>
                <div className="space-y-4">
                <textarea placeholder="Your Question?" className="px-4 py-2 block w-full bg-gray-900/50 border border-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    <input type="text" placeholder="Your answer?" className="px-4 py-2 block w-full bg-gray-900/50 border border-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
            </form>
        </JokeDialog>
    );
};

export default PostJokeDialog;