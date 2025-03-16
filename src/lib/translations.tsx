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
  REDEFINED_SECTION: {
    TITLE_1: string;
    TITLE_2: string;
    MOBILE_SUBHEADING: React.ReactNode;
    TAB_FOR_MEN: string;
    TAB_FOR_WOMEN: string;
    FOR_WOMEN_HEADING: string;
    FOR_WOMEN_SUBHEADING: React.ReactNode;
    FOR_MEN_HEADING: React.ReactNode;
    FOR_MEN_SUBHEADING: React.ReactNode;
    SHARED_PARAGRAPH: string;
  };
  FACE_VERIFICATION_SECTION: {
    TITLE: React.ReactNode;
    SUBHEADING: string;
  };
  INTERNATIONAL_SECTION: {
    TITLE: string;
    SUBHEADING: React.ReactNode;
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
    REDEFINED_SECTION: {
      TITLE_1: "High-End Dating.",
      TITLE_2: "Redefined.",
      MOBILE_SUBHEADING: (
        <>
          Join the largest, <strong className="font-bold">verified</strong>{" "}
          community of the most <strong className="font-bold">beautiful</strong>{" "}
          and <strong className="font-bold">successful</strong> singles around
          the world.
        </>
      ),
      TAB_FOR_MEN: "For Men",
      TAB_FOR_WOMEN: "For Women",
      FOR_WOMEN_HEADING: "Start Dating UP.",
      FOR_WOMEN_SUBHEADING: (
        <>
          Elevate your life with like-minded,{" "}
          <span className="underline">high-value</span> men around the world.
        </>
      ),
      FOR_MEN_HEADING: (
        <>
          Date the Most <br className="md:hidden" /> Beautiful Women.
        </>
      ),
      FOR_MEN_SUBHEADING: (
        <>
          Save time and interact only with{" "}
          <span className="underline">high quality</span> women around the
          world.
        </>
      ),
      SHARED_PARAGRAPH: `The Pulse community is carefully curated by our team. Each member's
        application is thoroughly reviewed, and only the best are approved to
        join.`,
    },
    FACE_VERIFICATION_SECTION: {
      TITLE: (
        <>
          No fakes. <br />
          Face verification required.
        </>
      ),
      SUBHEADING:
        "Video face and liveness verification is required for all members before joining Pulse.",
    },
    INTERNATIONAL_SECTION: {
      TITLE: "Search by multiple cities and nationalities at once.",
      SUBHEADING: (
        <>
          Easily get matches across multiple locations ahead of your travels.
          Search based on nationality and other filters previously{" "}
          <strong className="text-white">
            not available on any other dating apps.
          </strong>
        </>
      ),
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
    REDEFINED_SECTION: {
      TITLE_1: "Высококлассные знакомства.",
      TITLE_2: "Переопределено.",
      MOBILE_SUBHEADING: (
        <>
          Присоединяйтесь к крупнейшему,{" "}
          <strong className="font-bold">проверенному</strong> сообществу самых{" "}
          <strong className="font-bold">красивых</strong> и{" "}
          <strong className="font-bold">успешных</strong> одиноких людей по
          всему миру.
        </>
      ),
      TAB_FOR_MEN: "Для мужчин",
      TAB_FOR_WOMEN: "Для девушек",
      FOR_WOMEN_HEADING: "Начните встречаться с лучшими.",
      FOR_WOMEN_SUBHEADING: (
        <>
          Поднимите уровень своей жизни с единомышленниками,{" "}
          <span className="underline">высокоценными</span> мужчинами по всему
          миру.
        </>
      ),
      FOR_MEN_HEADING: (
        <>
          Встречайтесь с самыми <br className="md:hidden" /> красивыми девушек.
        </>
      ),
      FOR_MEN_SUBHEADING: (
        <>
          Экономьте время и общайтесь только с{" "}
          <span className="underline">качественными</span> девушками по всему
          миру.
        </>
      ),
      SHARED_PARAGRAPH: `Сообщество Pulse тщательно отбирается нашей командой. Заявка каждого участника
        тщательно проверяется, и только лучшие получают одобрение на вступление.`,
    },
    FACE_VERIFICATION_SECTION: {
      TITLE: (
        <>
          Никаких фейков. <br />
          Обязательная верификация.
        </>
      ),
      SUBHEADING:
        "Видео-верификация лица и живости обязательно для всех участников перед вступлением в Pulse.",
    },
    INTERNATIONAL_SECTION: {
      TITLE: "Поиск по городам и национальностям одновременно.",
      SUBHEADING: (
        <>
          Легко находите совпадения в разных местах перед поездкой. Поиск по
          национальности и другим фильтрам, ранее{" "}
          <strong className="text-white">
            недоступным в других приложениях.
          </strong>
        </>
      ),
    },
  },
};
