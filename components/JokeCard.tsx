import { motion, wrap } from "framer-motion";
import JokeAnswer from "./JokeAnswer";
import { Joke } from "@/lib/type";

type Props = {
    page: number,
    jokes: Joke[],
    direction?: number,
    paginate?: (num: number) => void,
}

const JokeCard = ({ page, direction, paginate, jokes }: Props) => {

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
    const pageIndex = wrap(0, jokes.length, page);
    const joke = jokes[pageIndex]

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
                    paginate && paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                    paginate && paginate(-1);
                }
            }}
            className="px-6 pb-20 h-full flex flex-col justify-center items-center"
            role="card"
        >
            <h2 className="max-w-md lg:max-w-lg xl:max-w-2xl text-3xl lg:text-4xl xl:text-6xl text-center mb-20">
                {joke.question}
            </h2>
            <JokeAnswer joke={jokes[pageIndex]} />
        </motion.div>
    );
};

export default JokeCard;