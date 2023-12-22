import { AnimatePresence } from "framer-motion";
import JokeCard from "./JokeCard";

type Props = {
    page: number;
    direction: number;
    paginate: (num: number) => void;
}

const CardContainer = ({ page, direction, paginate }: Props) => {
    return (
        <AnimatePresence
            initial={false}
            custom={direction}>
            <JokeCard page={page} direction={direction} paginate={paginate} />
        </AnimatePresence>
    );
};

export default CardContainer;