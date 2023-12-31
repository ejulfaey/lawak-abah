import { IconHandMove } from "@tabler/icons-react";

const SwiperLabel = () => {
    return (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="px-4 py-2 flex items-center gap-x-2 bg-gray-800/50 rounded text-gray-300">
                <IconHandMove stroke={2} size={24} />
                <p className="text-sm">Swipe left or right</p>
            </div>
        </div>
    );
};

export default SwiperLabel;