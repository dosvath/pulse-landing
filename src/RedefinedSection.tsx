import { useState } from "react";
import { Button } from "./components/ui/button";
import collageWomenSm from "@/assets/collage-women-sm.avif";
import collageWomenLg from "@/assets/collage-women-lg.avif";
import collageMenSm from "@/assets/collage-men-sm.avif";
import collageMenLg from "@/assets/collage-men-lg.avif";

export function RedefinedSection() {
  enum Tabs {
    MEN,
    WOMEN,
  }
  const [active, setActive] = useState(Tabs.WOMEN);

  function SharedParagraph() {
    return (
      <div className="text-zinc-500 font-medium max-w-2xl mx-auto px-8">
        The Pulse community is carefully curated by our team. Each member's
        application is thoroughly reviewed, and only the best are approved to
        join.
      </div>
    );
  }
  function ForMenSection() {
    return (
      <div className="mt-11 flex flex-col gap-y-5">
        <div className="text-2xl px-8 font-medium gap-y-1 justify-center">
          Date the Most <br className="md:hidden" /> Beautiful Women.
        </div>
        <SharedParagraph />
        <div className="font-medium mb-4 px-8">
          Save time and interact only with{" "}
          <span className="underline">high quality</span> women around the
          world.
        </div>
        <img
          src={collageWomenLg}
          className="hidden md:block max-w-8xl mx-auto px-8"
        />
        <img src={collageWomenSm} className="md:hidden" />
      </div>
    );
  }

  function ForWomenSection() {
    return (
      <div className="mt-11 flex flex-col gap-5">
        <div className="text-2xl font-medium gap-y-1 justify-center px-8 ">
          Start Dating UP.
        </div>
        <SharedParagraph />
        <div className="font-medium px-8">
          Elevate your life with like-minded,{" "}
          <span className="underline">high-value</span> men around the world.
        </div>
        <img
          src={collageMenLg}
          className="hidden md:block max-w-8xl mx-auto px-8"
        />
        <img src={collageMenSm} className="md:hidden" />
      </div>
    );
  }

  return (
    <div className="md:mt-16 mt-14 text-white items-center text-center w-full">
      <div className="text-3xl md:text-4xl font-bold flex md:flex-row flex-col gap-2 justify-center">
        <div>High-End Dating.</div>
        <div>Redefined.</div>
      </div>
      <div className="text-zinc-100 font-thin px-8 md:hidden mt-10 text-lg">
        Join the largest, <strong className="font-bold">verified</strong>{" "}
        community of the
        <br />
        most <strong className="font-bold">beautiful</strong> and{" "}
        <strong className="font-bold">successful</strong> singles
        <br />
        around the world.
      </div>
      <div className="flex flex-row gap-4 mt-11 w-full items-center justify-center">
        <Button
          variant="outline"
          className={`rounded-full text-lg h-12 w-40 border-2 hover:bg-transparent ${
            active === Tabs.MEN ? "border-white" : ""
          }`}
          onClick={() => setActive(Tabs.MEN)}
        >
          For Men
        </Button>
        <Button
          variant="outline"
          className={`rounded-full text-lg h-12 w-40 border-2 hover:bg-transparent ${
            active === Tabs.WOMEN ? "border-white" : ""
          }`}
          onClick={() => setActive(Tabs.WOMEN)}
        >
          For Women
        </Button>
      </div>
      {active === Tabs.MEN ? <ForMenSection /> : <ForWomenSection />}
    </div>
  );
}
