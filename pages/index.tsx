import { useEffect, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconHandMove } from "@tabler/icons-react";
import CardContainer from "@/components/CardContainer";
import CaretButton from "@/components/CaretButton";

const App = () => {

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage: [number, number] = [page + newDirection, newDirection];
    console.log('newPage', newPage);
    setPage(newPage);
  }

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
    <div className="h-[100dvh] w-screen flex flex-col bg-black text-white">
      <header className="p-4 bg-primary-500 flex items-center gap-2">
        <div className="p-2 bg-white rounded-full">
          <img src="/icon-128.png" alt="icon" className="w-6 h-6 -rotate-45" />
        </div>
        <div className="font-medium flex gap-2">
          <h1>Lawak Abah</h1>
        </div>
      </header>
      <main className="relative flex-1 w-screen bg-blue-500">
        <CardContainer page={page} direction={direction} paginate={paginate} />
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
