import logo from "@/assets/logo-w-text.svg";
import { Button } from "../components/ui/button";
import WaitlistButton from "../components/WaitlistButton";
import LanguageSelector from "../components/LanguageSelector";
import { PlatformLanguage } from "../generated-api/models/PlatformLanguage";
import { TRANSLATIONS } from "../lib/translations";

export function Header({
  language,
  setLanguage,
}: {
  language: PlatformLanguage;
  setLanguage: (newLanguage: PlatformLanguage) => void;
}) {
  return (
    <div className="w-full justify-between p-4 md:pt-6 flex max-w-7xl mx-auto">
      <img src={logo} alt="Pulse Logo" className="h-8" />
      <div className="flex flex-row space-x-3 items-center">
        {/* <Button
          variant="ghost"
          className="border border-white hover:bg-white/10"
          asChild
        >
          <a href="https://app.pulse-date.com">Login</a>
        </Button> */}
        <WaitlistButton
          language={language}
          customButton={
            <Button
              variant="ghost"
              className="border border-white hover:bg-white/10"
            >
              {TRANSLATIONS[language].HEADER.LOGIN_BUTTON}
            </Button>
          }
        />
        <LanguageSelector language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
}
