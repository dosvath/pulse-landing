import CtaSection from "./CtaSection";
import FaceVerificationSection from "./FaceVerificationSection";
import Footer from "./Footer";
import InternationalSection from "./InternationalSection";
import MessagesSection from "./MessagesSection";
import { RedefinedSection } from "./RedefinedSection";
import { VideoIntroSection } from "./VideoIntroSection";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="flex flex-col bg-zinc-950 text-white items-center  min-h-screen dark">
      <VideoIntroSection />
      <RedefinedSection />
      <hr className="w-[90vw] mt-16 mb-14 border-t border-white/12" />
      <FaceVerificationSection />
      <hr className="w-[90vw] mt-16 mb-14 border-t border-white/12" />
      <InternationalSection />
      <hr className="w-[90vw] mt-16 mb-14 border-t border-white/12" />
      <MessagesSection />
      <CtaSection />
      <hr className="w-[95vw] mt-8 mb-8 border-t border-white/12" />
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
