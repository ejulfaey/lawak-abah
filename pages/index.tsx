import { useEffect, useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconHandMove } from "@tabler/icons-react";
import { Jokes } from "@/lib/store";
import JokeCard from "@/components/JokeCard";
import CaretButton from "@/components/CaretButton";

const App = () => {

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
    const [[page, direction], setPage] = useState([0, 0]);
    const pageIndex = wrap(0, Jokes.length, page);

    const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowLeft":
                    paginate(1);
                    break;
                case "ArrowRight":
                    paginate(-1);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [paginate]);

    return (
        <div className="h-[100dvh] flex flex-col bg-black text-white">
            <header className="p-4 bg-primary-500 flex items-center gap-2">
                <div className="p-2 bg-white rounded-full">
                    <img src="/icon-128.png" alt="icon" className="w-6 h-6 -rotate-45" />
                </div>
                <div className="font-medium flex gap-2">
                    <h1>Lawak Abah</h1>
                </div>
            </header>
            <main className="flex-1 relative">
                <AnimatePresence
                    initial={false}
                    custom={direction}>
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
                        className="px-4 xl:px-0 h-full flex flex-col items-center justify-center"
                    >
                        <JokeCard joke={Jokes[pageIndex]} />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="px-4 py-2 flex items-center gap-x-2 bg-gray-800/50 rounded text-gray-300">
                        <IconHandMove className="w-4 h-4 stroke-2" />
                        <p className="text-sm">Swipe left or right</p>
                    </div>
                </div>
                <CaretButton onClick={() => paginate(1)} direction="left-4">
                    <IconArrowNarrowLeft />
                </CaretButton>
                <CaretButton onClick={() => paginate(-1)} direction="right-4">
                    <IconArrowNarrowRight />
                </CaretButton>
            </main>
        </div>
    );
};

export default App;
