import { AnimatePresence } from "framer-motion";
import JokeCard from "./JokeCard";
import { Joke } from "@/lib/type";

type Props = {
    page: number;
    direction: number;
    paginate: (num: number) => void;
    jokes: Joke[]
}

const CardContainer = ({ page, direction, paginate, jokes }: Props) => {
    return (
        <AnimatePresence
            initial={false}
            custom={direction}>
            <JokeCard page={page} direction={direction} paginate={paginate} jokes={jokes} />
        </AnimatePresence>
    );
};

export default CardContainer;