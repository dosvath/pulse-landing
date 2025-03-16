import { PlatformLanguage } from "@/generated-api/models/PlatformLanguage";

export function getDefaultLanguage(): PlatformLanguage {
  const locale = navigator.language.split("-")[0].toLowerCase();
  return LOCALE_MAP[locale] || PlatformLanguage.ENGLISH;
}

export const LOCALE_MAP: Record<string, PlatformLanguage> = {
  en: PlatformLanguage.ENGLISH,
  ru: PlatformLanguage.RUSSIAN,
};

export const SHORT_LOCALE_MAP: Record<PlatformLanguage, string> = {
  [PlatformLanguage.ENGLISH]: "EN",
  [PlatformLanguage.RUSSIAN]: "RU",
};

export type TranslationTree = {
  HEADER: {
    TITLE_DESKTOP: string;
    MOBILE_TITLE_PART1: string;
    MOBILE_TITLE_PART2: string;
    SUBHEADING: React.ReactNode;
    ALREADY_MEMBER: string;
    LOGIN_HERE: string;
    LOGIN_BUTTON: string;
    JOIN_PULSE_BUTTON: string;
  };
};

export const TRANSLATIONS: Record<PlatformLanguage, TranslationTree> = {
  [PlatformLanguage.ENGLISH]: {
    HEADER: {
      TITLE_DESKTOP: "No Swipes. No Games.",
      MOBILE_TITLE_PART1: "No Swipes.",
      MOBILE_TITLE_PART2: "No Games.",
      SUBHEADING: (
        <>
          Join the largest, <strong>verified</strong> community of the
          <br />
          most <strong>beautiful</strong> and <strong>successful</strong>{" "}
          singles
          <br />
          around the world.
        </>
      ),
      ALREADY_MEMBER: "Already a member?",
      LOGIN_HERE: "Login here",
      LOGIN_BUTTON: "Login",
      JOIN_PULSE_BUTTON: "Join Pulse",
    },
  },
  [PlatformLanguage.RUSSIAN]: {
    HEADER: {
      TITLE_DESKTOP: "Никаких свайпов. Никаких игр.",
      MOBILE_TITLE_PART1: "Никаких свайпов.",
      MOBILE_TITLE_PART2: "Никаких игр.",
      SUBHEADING: (
        <>
          Присоединяйтесь к крупнейшему, <strong>проверенному</strong>{" "}
          сообществу
          <br />
          самых <strong>красивых</strong> и <strong>успешных</strong> одиноких
          людей
          <br />
          по всему миру.
        </>
      ),
      ALREADY_MEMBER: "Уже участник?",
      LOGIN_HERE: "Войти здесь",
      LOGIN_BUTTON: "Войти",
      JOIN_PULSE_BUTTON: "Присоединиться к Pulse",
    },
  },
};
