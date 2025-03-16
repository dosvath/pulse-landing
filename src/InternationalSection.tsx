import searchModal from "@/assets/search-modal.avif";
import { PlatformLanguage } from "./generated-api/models/PlatformLanguage";
import { TRANSLATIONS } from "./lib/translations";

export default function InternationalSection({
  language,
}: {
  language: PlatformLanguage;
}) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 w-full px-8 mx-auto max-w-6xl">
      <img
        src={searchModal}
        className="w-lg md:w-1/2 lg:w-auto lg:max-w-lg md:p-0 mt-6 md:mt-0"
      />
      <div className="flex flex-col gap-5 md:p-0 md:max-w-md justify-center">
        <div className="text-3xl font-medium max-w-sm mx-auto md:mx-0 text-center md:text-left">
          {TRANSLATIONS[language].INTERNATIONAL_SECTION.TITLE}
        </div>
        <div className="text-zinc-500 font-medium md:max-w-md text-center md:text-left">
          {TRANSLATIONS[language].INTERNATIONAL_SECTION.SUBHEADING}
        </div>
      </div>
    </div>
  );
}
