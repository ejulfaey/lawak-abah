import { useEffect, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconHandMove } from "@tabler/icons-react";
import CardContainer from "@/components/CardContainer";
import CaretButton from "@/components/CaretButton";
import Head from "next/head";
import Image from "next/image";

const App = () => {

  const [[page, direction], setPage] = useState([0, 0]);
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
    <>
      <Head>
        <title>Lawak Abah</title>
        <link rel="shortcut icon" href="/icon-32.png" type="image/x-icon" />
      </Head>
      <div className="h-[100dvh] w-screen flex flex-col bg-black text-white">
        <header className="p-4 bg-primary-500 flex items-center gap-2">
          <div className="p-1.5 bg-white rounded-full">
            <Image width={24} height={24} src="/icon-128.png" alt="icon" className="-rotate-45" />
          </div>
          <div className="font-medium flex gap-2">
            <h1>Lawak Abah</h1>
          </div>
        </header>
        <main className="flex-1">
          <CardContainer page={page} direction={direction} paginate={paginate} />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="px-4 py-2 flex items-center gap-x-2 bg-gray-800/50 rounded text-gray-300">
              <IconHandMove stroke={2} size={24} />
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
    </>
  );
};

export default App;
