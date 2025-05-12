import faceVerification from "@/assets/face-verification.avif";
import { PlatformLanguage } from "../generated-api/models/PlatformLanguage";
import { TRANSLATIONS } from "../lib/translations";

export default function FaceVerificationSection({
  language,
}: {
  language: PlatformLanguage;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center px-8 justify-between w-full mx-auto max-w-6xl gap-5">
      <div className="flex flex-col gap-5">
        <div className="text-3xl font-medium gap-y-1 justify-center text-center md:text-left">
          {TRANSLATIONS[language].FACE_VERIFICATION_SECTION.TITLE}
        </div>
        <div className="text-zinc-500 font-medium md:max-w-md mx-auto text-center md:text-left">
          {TRANSLATIONS[language].FACE_VERIFICATION_SECTION.SUBHEADING}
        </div>
      </div>
      <img
        src={faceVerification}
        className="max-w-[500px] w-full mt-6 md:m-0"
      />
    </div>
  );
}
