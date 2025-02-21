import FaceVerificationSection from "./FaceVerificationSection";
import InternationalSection from "./InternationalSection";
import { RedefinedSection } from "./RedefinedSection";
import { VideoIntroSection } from "./VideoIntroSection";

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
    </div>
  );
}

export default App;
