import { atomGuestId } from "@/lib/store";
import { LikeService } from "@/services/like-service";
import { IconCheck, IconLoader, IconX } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { useState } from "react";

interface Props {
    id: number;
}

const JokeButtons = ({ id }: Props) => {

    const [loading, setLoading] = useState<boolean>(false);
    const sessionId = useAtomValue(atomGuestId);
    const onClick = (status: boolean) => {
        setLoading(true);
        LikeService.toggleJoke({
            jokeId: id,
            sessionId,
            status
        })
            .then((res) => {
                console.log('res', res);
            })
            .catch((err) => {
                console.log('err', err);
            })
            .finally(() => setLoading(false));
    }

    if (loading) return (
        <div className="p-6 w-full flex justify-evenly md:justify-center gap-x-0 md:gap-10">
            <IconLoader stroke={2} className="w-7 h-7 animate-spin" />
        </div>
    );

    return (
        <div className="p-6 w-full flex justify-evenly md:justify-center gap-x-0 md:gap-10">
            <button onClick={() => onClick(false)} type="button" className="p-2 md:px-4 text-red-500 rounded border-2 border-red-500 flex items-center gap-x-2">
                <IconX stroke={2} className="w-10 h-10 md:w-6 md:h-6" />
                <p className="hidden md:block md:font-medium">Boring</p>
            </button>
            <button onClick={() => onClick(true)} type="button" className="p-2 md:px-4 text-green-500 rounded border-2 border-green-500 flex items-center gap-x-2">
                <IconCheck stroke={2} className="w-10 h-10 md:w-6 md:h-6" />
                <p className="hidden md:block md:font-medium">Funny</p>
            </button>
        </div>
    );
};

export default JokeButtons;