import { useEffect, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import CardContainer from "@/components/CardContainer";
import CaretButton from "@/components/CaretButton";
import Head from "next/head";
import Header from "@/components/Header";
import SwiperLabel from "@/components/SwiperLabel";
import { Toaster } from "@/components/ui/toaster";

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
        <Header />
        <main className="flex-1">
          <CardContainer page={page} direction={direction} paginate={paginate} />
          {/* <SwiperLabel /> */}
          <CaretButton onClick={() => paginate(1)} direction="left-4">
            <IconArrowNarrowLeft />
          </CaretButton>
          <CaretButton onClick={() => paginate(-1)} direction="right-4">
            <IconArrowNarrowRight />
          </CaretButton>
        </main>
      </div>
      <Toaster />
    </>
  );
};

export default App;
































