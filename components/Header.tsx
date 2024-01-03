"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import PostJokeDialog from "./PostJokeDialog";
import { useState } from "react";

const Header = () => {

    const [toggle, setToggle] = useState<boolean>(false);
    const onClose = () => setToggle(false);
    const onOk = () => setToggle(false);

    return (
        <>
            <header className="p-4 bg-primary-500 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-white rounded-full">
                        <Image width={24} height={24} src="/icon-128.png" alt="icon" className="-rotate-45" />
                    </div>
                    <div className="font-medium flex gap-2">
                        <h1>Lawak Abah</h1>
                    </div>
                </div>
                <Button onClick={() => setToggle(true)} className="bg-blue-600 hover:bg-blue-700">Post A Joke</Button>
            </header>
            {toggle && <PostJokeDialog onClose={onClose} onOk={onOk} />}
        </>
    );
};

export default Header;