import { motion, wrap } from "framer-motion";
import { Jokes } from "../lib/store";
import JokeAnswer from "./JokeAnswer";

type Props = {
    page: number,
    direction: number,
    paginate: (num: number) => void
}

const JokeCard = ({ page, direction, paginate }: Props) => {

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };
    const pageIndex = wrap(0, Jokes.length, page);
    const joke = Jokes[pageIndex]

    return (
        <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                }
            }}
            className="px-6 h-full flex flex-col justify-center items-center bg-red-500"
        >
            <h2 className="max-w-md lg:max-w-lg xl:max-w-xl text-3xl text-center lg:text-4xl mb-20">
                {joke.question}
            </h2>
            <JokeAnswer joke={Jokes[pageIndex]} />
        </motion.div>
    );
};

export default JokeCard;