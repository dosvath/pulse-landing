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
      TITLE_DESKTOP: "Без свайпов. Без игр.",
      MOBILE_TITLE_PART1: "Без свайпов.",
      MOBILE_TITLE_PART2: "Без игр.",
      SUBHEADING: (
        <>
          Присоединяйтесь к крупнейшему сообществу самых
          <br />
          <strong>красивых</strong> и <strong>успешных</strong> людей мира{" "}
          <br /> — здесь всё по-настоящему.
        </>
      ),
      ALREADY_MEMBER: "Уже с нами?",
      LOGIN_HERE: "Войти здесь",
      LOGIN_BUTTON: "Войти",
      JOIN_PULSE_BUTTON: "Присоединиться к Pulse",
    },
    REDEFINED_SECTION: {
      TITLE_1: "Новый стандарт знакомств.",
      TITLE_2: "Когда важно, с кем.",
      MOBILE_SUBHEADING: (
        <>
          Присоединяйтесь к крупнейшему сообществу самых{" "}
          <strong className="font-bold">красивых</strong> и{" "}
          <strong className="font-bold">успешных</strong> людей мира — здесь всё
          по-настоящему.
        </>
      ),
      TAB_FOR_MEN: "Для мужчин",
      TAB_FOR_WOMEN: "Для девушек",
      FOR_WOMEN_HEADING: "Для тех, кто перерос привычные форматы.",
      FOR_WOMEN_SUBHEADING: (
        <>
          Расширяйте горизонты — знакомьтесь с{" "}
          <span className="underline">успешными</span>, амбициозными и близкими
          по духу мужчинами со всего мира.
        </>
      ),
      FOR_MEN_HEADING: (
        <>
          Знакомьтесь с самыми <br className="md:hidden" /> восхитительными
          девушками.
        </>
      ),
      FOR_MEN_SUBHEADING: <>Вы знаете, кого ищете. Мы уже их отобрали.</>,
      SHARED_PARAGRAPH: `В Pulse нет места случайным людям. Мы проверяем каждого. Чтобы вы выбирали из лучших.`,
    },
    FACE_VERIFICATION_SECTION: {
      TITLE: (
        <>
          Никаких фейков. <br />
          Только реальные люди.
        </>
      ),
      SUBHEADING:
        "Каждую анкету мы проверяем вручную. Доступ получают только те, кто прошёл видео- и лайв-верификацию.",
    },
    INTERNATIONAL_SECTION: {
      TITLE:
        "География больше не важна. Выбирайте интересных людей в любой точке мира.",
      SUBHEADING: (
        <>
          Ищите совпадения в нескольких городах одновременно — ещё до того, как
          соберёте чемодан. Выбирайте людей по национальности и другим
          уникальным фильтрам, которых{" "}
          <strong className="text-white">нет в других приложениях.</strong>
        </>
      ),
    },
    MESSAGES_SECTION: {
      TITLE: <>Хватит бесконечно свайпать — переходите к общению.</>,
      SWIPING_SLOW: (
        <>
          Свайпы <span className="underline">утомляют</span> и отнимают массу
          времени.
        </>
      ),
      START_CHATTING:
        "Начните общаться прямо сейчас — используйте быстрые и удобные инструменты:",
      SHARE_CONTACT: (
        <>
          Делитесь контактами <strong>одним касанием</strong>
        </>
      ),
      PRE_FILLED: (
        <>
          <strong>Готовые шаблоны</strong> для мгновенного начала общения
        </>
      ),
    },
    CTA_SECTION: {
      TITLE: (
        <div className="flex flex-col md:flex-row text-3xl gap-3">
          <div>Выбирайте лучшее.</div>
          <div>Без компромиссов.</div>
        </div>
      ),
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
