import { useState } from "react";
import { Joke } from "../lib/type";
import { motion } from "framer-motion";

type Props = {
    joke: Joke,
}

const JokeCard = ({ joke }: Props) => {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <>
            <h2 className="max-w-md lg:max-w-lg xl:max-w-xl text-3xl text-center lg:text-4xl mb-20">
                {joke.question}
            </h2>
            {
                toggle ?
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h1 className="text-white text-center">
                            {joke.answer}
                        </h1>
                    </motion.div>
                    :
                    <button
                        type="button"
                        onClick={() => setToggle(prev => !prev)}
                        className="text-white"
                    >
                        Tell me
                    </button>
            }
        </>
    );
};

export default JokeCard;