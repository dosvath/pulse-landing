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
  MESSAGES_SECTION: {
    TITLE: React.ReactNode;
    SWIPING_SLOW: React.ReactNode;
    START_CHATTING: string;
    SHARE_CONTACT: React.ReactNode;
    PRE_FILLED: React.ReactNode;
  };
  CTA_SECTION: {
    TITLE: React.ReactNode;
  };
  WAITLIST_MODAL: {
    TITLE: string;
    SENDING_BUTTON: string;
    CONTINUE_BUTTON: string;
    ALREADY_ON_WAITLIST: string;
    INVALID_EMAIL: string;
    UNKNOWN_ERROR: string;
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
    MESSAGES_SECTION: {
      TITLE: (
        <>
          No more endless swiping. <br />
          Instant, real-time messaging.
        </>
      ),
      SWIPING_SLOW: (
        <>
          Swiping is <span className="underline">slow and exhausting</span>.
        </>
      ),
      START_CHATTING:
        "Start chatting with other members right away with easy messaging shortcuts:",
      SHARE_CONTACT: (
        <>
          Share contact info <strong>in one tap</strong>
        </>
      ),
      PRE_FILLED: (
        <>
          <strong>Easy, pre-filled</strong> intro messages
        </>
      ),
    },
    CTA_SECTION: {
      TITLE: (
        <>
          Date up. <br className="md:hidden" /> Don't Settle.
        </>
      ),
    },
    WAITLIST_MODAL: {
      TITLE: "Get notified when Pulse is live",
      SENDING_BUTTON: "Sending",
      CONTINUE_BUTTON: "Continue",
      ALREADY_ON_WAITLIST: "Already on the waitlist 🎉",
      INVALID_EMAIL: "Invalid email address or captcha ❌",
      UNKNOWN_ERROR: "An error occurred.",
    },
  },
  [PlatformLanguage.RUSSIAN]: {
    HEADER: {
      TITLE_DESKTOP: "Никаких свайпов. Никаких игр.",
      MOBILE_TITLE_PART1: "Никаких свайпов.",
      MOBILE_TITLE_PART2: "Никаких игр.",
      SUBHEADING: (
        <>
          Присоединяйтесь к самому большому, <strong>проверенному</strong>{" "}
          <br />
          сообществу <strong>красивых</strong> и <strong>успешных</strong>
          <br />
          людей по всему миру.
        </>
      ),
      ALREADY_MEMBER: "Уже участник?",
      LOGIN_HERE: "Войти здесь",
      LOGIN_BUTTON: "Войти",
      JOIN_PULSE_BUTTON: "Присоединиться к Pulse",
    },
    REDEFINED_SECTION: {
      TITLE_1: "Высокоуровневые знакомства.",
      TITLE_2: "Переопределено.",
      MOBILE_SUBHEADING: (
        <>
          Присоединяйтесь к самому большому,{" "}
          <strong className="font-bold">проверенному</strong> сообществу{" "}
          <strong className="font-bold">красивых</strong> и{" "}
          <strong className="font-bold">успешных</strong> людей по всему миру.
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
          Встречайтесь с самыми <br className="md:hidden" /> красивыми
          девушками.
        </>
      ),
      FOR_MEN_SUBHEADING: (
        <>
          Экономьте время и общайтесь только с{" "}
          <span className="underline">лучшими</span> девушками по всему миру.
        </>
      ),
      SHARED_PARAGRAPH: `Наша команда тщательно следит за деятельностью сообщества Pulse.
      Заявки каждого участника тщательно рассматриваются, и только лучшие из них принимаются в сообщество.`,
    },
    FACE_VERIFICATION_SECTION: {
      TITLE: (
        <>
          Никаких фейков. <br />
          Обязательная верификация.
        </>
      ),
      SUBHEADING:
        "Видео-верификация и оживленность лица обязательна для всех участников перед вступлением в Pulse.",
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
    MESSAGES_SECTION: {
      TITLE: (
        <>
          Больше нет бесконечных свайпов. <br />
          Мгновенные сообщения.
        </>
      ),
      SWIPING_SLOW: (
        <>
          Свайп это <span className="underline">медленно и утомительно</span>.
        </>
      ),
      START_CHATTING:
        "Начните общаться с другими пользователями прямо с помощью простых ярлыков:",
      SHARE_CONTACT: (
        <>
          Поделитесь контактом <strong>одним касанием</strong>
        </>
      ),
      PRE_FILLED: (
        <>
          <strong>Простые, готовые</strong> вступительные сообщения
        </>
      ),
    },
    CTA_SECTION: {
      TITLE: <>Не соглашайтесь на меньшее.</>,
    },
    WAITLIST_MODAL: {
      TITLE: "Получите уведомление, когда Pulse запустится",
      SENDING_BUTTON: "Отправка",
      CONTINUE_BUTTON: "Продолжить",
      ALREADY_ON_WAITLIST: "Уже в списке ожидания 🎉",
      INVALID_EMAIL: "Неверный адрес электронной почты или капча ❌",
      UNKNOWN_ERROR: "Произошла ошибка.",
    },
  },
};
