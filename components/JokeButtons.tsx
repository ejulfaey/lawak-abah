import { IconCheck, IconX } from "@tabler/icons-react";

interface Props {
    id: number;
}

const JokeButtons = ({ id }: Props) => {
    return (
        <div className="p-6 w-full flex justify-evenly md:justify-center gap-x-0 md:gap-10">
            <button type="button" className="p-2 rounded border-2 border-red-500">
                <IconX stroke={2} size={40} className="stroke-red-500" />
            </button>
            <button type="button" className="p-2 rounded border-2 border-green-500">
                <IconCheck stroke={2} size={40} className="stroke-green-500" />
            </button>
        </div>
    );
};

export default JokeButtons;