import profileMessage from "@/assets/profile-message.avif";
import conversationMessage from "@/assets/conversation-message.avif";
import telegram from "@/assets/telegram.svg";
import whatsapp from "@/assets/whatsapp.svg";
import typingIndicator from "@/assets/typing-indicator.svg";
import brain from "@/assets/brain.svg";
import { PlatformLanguage } from "./generated-api/models/PlatformLanguage";
import { TRANSLATIONS } from "./lib/translations";

export default function MessagesSection({
  language,
}: {
  language: PlatformLanguage;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full px-8 mx-auto max-w-6xl">
      <div className="flex flex-col gap-5 md:max-w-md">
        <div className="text-3xl font-medium gap-y-1 justify-center mb-2 md:mb-0 text-center md:text-left">
          {TRANSLATIONS[language].MESSAGES_SECTION.TITLE}
        </div>
        <img
          src={conversationMessage}
          className="md:hidden max-w-2xs mx-auto w-full"
          alt="Conversation Message"
        />
        <div className="font-medium text-center md:text-left">
          {TRANSLATIONS[language].MESSAGES_SECTION.SWIPING_SLOW}
        </div>
        <div className="text-zinc-500 font-medium text-center md:text-left">
          {TRANSLATIONS[language].MESSAGES_SECTION.START_CHATTING}
        </div>
        <div className="flex flex-col gap-8 md:gap-6 w-full text-center md:text-left mt-2 md:mt-0">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start">
            <div className="flex flex-row gap-1">
              <img src={telegram} className="w-8 h-8" alt="Telegram" />
              <img src={whatsapp} className="w-8 h-8" alt="Whatsapp" />
            </div>
            <div>{TRANSLATIONS[language].MESSAGES_SECTION.SHARE_CONTACT}</div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:justify-start">
            <div className="flex flex-row gap-1">
              <img
                src={typingIndicator}
                className="w-8 h-8"
                alt="Typing Indicator"
              />
              <img src={brain} className="w-8 h-8" alt="Brain Icon" />
            </div>
            <div className="flex-1">
              {TRANSLATIONS[language].MESSAGES_SECTION.PRE_FILLED}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex gap-4 flex-shrink">
        <img
          src={profileMessage}
          className="w-full max-w-xs object-contain"
          alt="Profile Message"
        />
        <img
          src={conversationMessage}
          className="w-full max-w-xs object-contain"
          alt="Conversation Message"
        />
      </div>
    </div>
  );
}
