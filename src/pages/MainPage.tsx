import { getDefaultLanguage } from "@/lib/translations";
import CtaSection from "@/sections/CtaSection";
import FaceVerificationSection from "@/sections/FaceVerificationSection";
import Footer from "@/sections/Footer";
import InternationalSection from "@/sections/InternationalSection";
import MessagesSection from "@/sections/MessagesSection";
import { RedefinedSection } from "@/sections/RedefinedSection";
import { VideoIntroSection } from "@/sections/VideoIntroSection";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState } from "react";

export default function MainPage() {
  const [language, setLanguage] = useState(getDefaultLanguage());

  return (
    <div className="flex flex-col bg-zinc-950 text-white items-center  min-h-screen dark">
      <VideoIntroSection language={language} setLanguage={setLanguage} />
      <RedefinedSection language={language} />
      <hr className="w-[90vw] mt-16 mb-14 border-t border-white/12" />
      <FaceVerificationSection language={language} />
      <hr className="w-[90vw] mt-16 mb-14 border-t border-white/12" />
      <InternationalSection language={language} />
      <hr className="w-[90vw] mt-16 mb-14 border-t border-white/12" />
      <MessagesSection language={language} />
      <CtaSection language={language} />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
