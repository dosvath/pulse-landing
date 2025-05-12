import { useState } from "react";
import { Button } from "../components/ui/button";
import collageWomenSm from "@/assets/collage-women-sm.avif";
import collageWomenLg from "@/assets/collage-women-lg.avif";
import collageMenSm from "@/assets/collage-men-sm.avif";
import collageMenLg from "@/assets/collage-men-lg.avif";
import { PlatformLanguage } from "../generated-api/models/PlatformLanguage";
import { TRANSLATIONS } from "../lib/translations";

export function RedefinedSection({ language }: { language: PlatformLanguage }) {
  enum Tabs {
    MEN,
    WOMEN,
  }
  const [active, setActive] = useState(Tabs.WOMEN);

  function SharedParagraph() {
    return (
      <div className="text-zinc-500 font-medium max-w-2xl mx-auto px-8">
        {TRANSLATIONS[language].REDEFINED_SECTION.SHARED_PARAGRAPH}
      </div>
    );
  }
  function ForMenSection() {
    return (
      <div className="mt-11 flex flex-col gap-y-5">
        <div className="text-3xl px-8 font-medium gap-y-1 justify-center">
          {TRANSLATIONS[language].REDEFINED_SECTION.FOR_MEN_HEADING}
        </div>
        <SharedParagraph />
        <div className="font-medium mb-4 px-8">
          {TRANSLATIONS[language].REDEFINED_SECTION.FOR_MEN_SUBHEADING}
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
        <div className="text-3xl font-medium gap-y-1 justify-center px-8 ">
          {TRANSLATIONS[language].REDEFINED_SECTION.FOR_WOMEN_HEADING}
        </div>
        <SharedParagraph />
        <div className="font-medium px-8">
          {TRANSLATIONS[language].REDEFINED_SECTION.FOR_WOMEN_SUBHEADING}
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
      <div className="text-3xl md:text-4xl font-bold flex lg:flex-row flex-col gap-2 justify-center">
        <div>{TRANSLATIONS[language].REDEFINED_SECTION.TITLE_1}</div>
        <div>{TRANSLATIONS[language].REDEFINED_SECTION.TITLE_2}</div>
      </div>
      <div className="text-zinc-100 font-thin px-8 md:hidden mt-10 text-lg">
        {TRANSLATIONS[language].REDEFINED_SECTION.MOBILE_SUBHEADING}
      </div>
      <div className="flex flex-row gap-4 mt-11 w-full items-center justify-center">
        <Button
          variant="outline"
          className={`rounded-full text-lg h-12 w-40 border-2 hover:bg-transparent ${
            active === Tabs.MEN ? "border-white" : ""
          }`}
          onClick={() => setActive(Tabs.MEN)}
        >
          {TRANSLATIONS[language].REDEFINED_SECTION.TAB_FOR_MEN}
        </Button>
        <Button
          variant="outline"
          className={`rounded-full text-lg h-12 w-40 border-2 hover:bg-transparent ${
            active === Tabs.WOMEN ? "border-white" : ""
          }`}
          onClick={() => setActive(Tabs.WOMEN)}
        >
          {TRANSLATIONS[language].REDEFINED_SECTION.TAB_FOR_WOMEN}
        </Button>
      </div>
      {active === Tabs.MEN ? <ForMenSection /> : <ForWomenSection />}
    </div>
  );
}
