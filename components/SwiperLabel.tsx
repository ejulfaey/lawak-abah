import { atomSwiperLabel } from "@/lib/store";
import { IconHandMove, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";

const SwiperLabel = () => {

    const [toggle, setToggle] = useAtom(atomSwiperLabel);

    return toggle &&
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="flex bg-gray-800/50 rounded">
                <div className="px-4 py-2 flex items-center gap-x-2 text-gray-300 border-r-2 border-black">
                    <IconHandMove stroke={2} size={20} />
                    <p className="text-xs md:text-sm">Swipe left or right</p>
                </div>
                <button onClick={() => setToggle(false)} type="button" className="p-2">
                    <IconX stroke={2} size={20} />
                </button>
            </div>
        </motion.div>
};

export default SwiperLabel;