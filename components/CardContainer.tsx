import { AnimatePresence } from "framer-motion";
import JokeCard from "./JokeCard";
import { Joke } from "@/lib/type";
import { useEffect, useState } from "react";
import { JokeService } from "@/services/joke-service";
import { IconLoader } from "@tabler/icons-react";

type Props = {
    page: number;
    direction: number;
    paginate: (num: number) => void;
}

const CardContainer = (props: Props) => {

    const [jokes, setJokes] = useState<Joke[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = () => {
        setLoading(true);
        JokeService.getJokes()
            .then((res: any) => { setJokes(res); console.log(res); })
            .catch((err: any) => console.error(err))
            .finally(() => setLoading(false));
    }

    useEffect(() => fetchData(), []);

    if (loading) return (
        <div data-testid="loading" className="w-full h-full flex justify-center items-center">
            <div className="animate-spin">
                <IconLoader size={30} />
            </div>
        </div>
    );

    return (
        <AnimatePresence
            initial={false}
            custom={props.direction}>
            <JokeCard {...props} jokes={jokes} />
        </AnimatePresence>
    );
};

export default CardContainer;