import { SHORT_LOCALE_MAP } from "@/lib/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { PlatformLanguage } from "@/generated-api/models/PlatformLanguage";

export default function LanguageSelector({
  language,
  setLanguage,
}: {
  language: PlatformLanguage;
  setLanguage: (newLanguage: PlatformLanguage) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-5 text-center focus:outline-none focus:ring-0 text-sm">
        {SHORT_LOCALE_MAP[language]}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark min-w-0 w-10 bg-black/25 border-0">
        {language !== PlatformLanguage.ENGLISH && (
          <DropdownMenuItem
            className="justify-center"
            onClick={() => setLanguage(PlatformLanguage.ENGLISH)}
          >
            EN
          </DropdownMenuItem>
        )}
        {language !== PlatformLanguage.RUSSIAN && (
          <DropdownMenuItem
            className="justify-center"
            onClick={() => setLanguage(PlatformLanguage.RUSSIAN)}
          >
            RU
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
