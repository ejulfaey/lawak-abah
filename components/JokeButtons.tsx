import { atomGuestId } from "@/lib/store";
import { LikeService } from "@/services/like-service";
import { IconLoader, IconMoodEmpty, IconMoodEmptyFilled, IconMoodHappy, IconMoodHappyFilled, IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { useState } from "react";

interface Props {
    id: number;
    likeCounter: number;
    dislikeCounter: number;
}

const JokeButtons = ({ id, likeCounter = 0, dislikeCounter = 0 }: Props) => {

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
        <div className="p-6 w-full flex justify-center gap-6">
            <div className="flex flex-col items-center">
                <button onClick={() => onClick(false)} type="button" className="block p-2 bg-red-500 rounded-full border-4 border-red-600">
                    <IconMoodEmptyFilled stroke={2} className="w-10 h-10 md:w-6 md:h-6" />
                </button>
                <span>{dislikeCounter}</span>
            </div>
            <div className="flex flex-col items-center">
                <button onClick={() => onClick(true)} type="button" className="block p-2 bg-green-500 rounded-full border-4 border-green-600">
                    <IconMoodHappyFilled stroke={2} className="w-10 h-10 md:w-6 md:h-6" />
                </button>
                <span>{likeCounter}</span>
            </div>
        </div>
    );
};

export default JokeButtons;