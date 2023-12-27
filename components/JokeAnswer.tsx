import { motion } from "framer-motion";
import { Joke } from "../lib/type";
import { useState } from "react";

type Props = {
    joke: Joke
}

const JokeAnswer = ({ joke }: Props) => {
    const [toggle, setToggle] = useState<boolean>(false);

    if (toggle) return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            data-testid="joke-answer"

        >
            <h1 className="text-white text-center">
                {joke.answer}
            </h1>
        </motion.div>
    );

    return (
        <button
            type="button"
            onClick={() => setToggle(prev => !prev)}
            className="text-white"
        >
            Tell me
        </button >
    );
};

export default JokeAnswer;