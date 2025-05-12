import WaitlistButton from "../components/WaitlistButton";
import { PlatformLanguage } from "../generated-api/models/PlatformLanguage";
import { Header } from "./Header";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { TRANSLATIONS } from "../lib/translations";

export function VideoIntroSection({
  language,
  setLanguage,
}: {
  language: PlatformLanguage;
  setLanguage: (newLanguage: PlatformLanguage) => void;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function DesktopText() {
    return (
      <div className="absolute top-1/2 left-0 transform -translate-y-1/3 w-full">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            {TRANSLATIONS[language].HEADER.TITLE_DESKTOP}
          </h1>
          <p className="text-xl text-zinc-300 mb-8">
            {TRANSLATIONS[language].HEADER.SUBHEADING}
          </p>
          {/* <Button
            asChild
            className="bg-white text-black h-12 text-md font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            <a href="https://staging.pulse-date.com/#/sign-up">Join Pulse</a>
          </Button> */}
          <WaitlistButton language={language} />
          <div className="mt-4 text-white">
            {TRANSLATIONS[language].HEADER.ALREADY_MEMBER}{" "}
            <a href="" className="underline">
              {TRANSLATIONS[language].HEADER.LOGIN_HERE}
            </a>
          </div>
        </div>
      </div>
    );
  }

  function MobileText() {
    return (
      <div className="absolute top-3/4 left-0 transform -translate-y-1/2 w-full">
        <div className="max-w-5xl mx-auto px-8 w-full text-center">
          <div className="text-5xl font-bold text-white flex flex-col gap-3">
            <div>{TRANSLATIONS[language].HEADER.MOBILE_TITLE_PART1}</div>
            <div>{TRANSLATIONS[language].HEADER.MOBILE_TITLE_PART2}</div>
          </div>
          {/* <Button
            asChild
            className="mt-8 bg-white text-black h-12 w-62 text-md font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            <a href="https://staging.pulse-date.com/#/sign-up">Join Pulse</a>
          </Button> */}
          <WaitlistButton language={language} className="w-62 mt-8" />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full relative min-h-50">
      <video
        src={
          isDesktop
            ? "https://images.pulse-date.com/header-video-desktop-xs.mp4"
            : "https://images.pulse-date.com/landing-video-mobile.mp4"
        }
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[90vh] object-cover opacity-45"
      />
      <div className="absolute top-0 left-0 w-full">
        <Header language={language} setLanguage={setLanguage} />
      </div>
      {isDesktop ? <DesktopText /> : <MobileText />}
    </div>
  );
}
