import { IconX } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Joke } from "@/lib/type";

type Props = {
    onClose: () => void;
    onOk: (data: Joke) => void;
    children: React.ReactNode;
    title?: string;
}

const JokeDialog = ({ onClose, onOk, children, title = 'Title' }: Props) => {

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleKeyDown = (event: KeyboardEvent) => (event.key === "Escape") && onClose();
        document.addEventListener("keydown", handleKeyDown);

        const handleClickOutside = (event: any) => (divRef.current === event.target) && onClose();
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [])

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .1, duration: .2, ease: "easeInOut" }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-30 bg-white/40"></motion.div>
            <motion.div
                ref={divRef}
                initial={{ opacity: 0, scale: .8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: .15, duration: .25, ease: "easeInOut" }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 flex justify-center items-center px-4 md:px-0">
                <div className="max-w-lg w-full bg-gray-800 shadow-lg rounded-2xl overflow-hidden">
                    <div className="relative p-4">
                        <div className="text-center">
                            <h1 className="text-lg font-medium">{title}</h1>
                        </div>
                        <Button onClick={onClose} type="button" className="absolute top-2 right-2 p-2 bg-transparent">
                            <IconX size={24} stroke={2} />
                        </Button>
                    </div>
                    {children}
                </div>
            </motion.div>
        </>
    );
};

export default JokeDialog;