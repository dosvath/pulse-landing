import { Header } from "./Header";
import { useMediaQuery } from "./useMediaQuery";
import WaitlistButton from "./WaitlistButton";

export function VideoIntroSection() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function DesktopText() {
    return (
      <div className="absolute top-1/2 left-0 transform -translate-y-1/3 w-full">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            No Swipes. No Games.
          </h1>
          <p className="text-xl text-zinc-300 mb-8">
            Join the largest, <strong>verified</strong> community of the
            <br />
            most <strong>beautiful</strong> and <strong>successful</strong>{" "}
            singles
            <br />
            around the world.
          </p>
          {/* <Button
            asChild
            className="bg-white text-black h-12 text-md font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            <a href="https://staging.pulse-date.com/#/sign-up">Join Pulse</a>
          </Button> */}
          <WaitlistButton />
          <div className="mt-4 text-white">
            Already a member?{" "}
            <a href="" className="underline">
              Login here
            </a>
          </div>
        </div>
      </div>
    );
  }

  function MobileText() {
    return (
      <div className="absolute top-3/4 left-0 transform -translate-y-1/2 w-full">
        <div className="max-w-5xl mx-auto px-8 w-full text-center">
          <div className="text-5xl font-bold text-white flex flex-col gap-3">
            <div>No Swipes.</div>
            <div> No Games.</div>
          </div>
          {/* <Button
            asChild
            className="mt-8 bg-white text-black h-12 w-62 text-md font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            <a href="https://staging.pulse-date.com/#/sign-up">Join Pulse</a>
          </Button> */}
          <WaitlistButton className="w-62 mt-8" />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full relative min-h-50">
      <video
        src={
          isDesktop
            ? "https://images.pulse-date.com/header-video-desktop-xs.mp4"
            : "https://images.pulse-date.com/landing-video-mobile.mp4"
        }
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[90vh] object-cover opacity-45"
      />
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>
      {isDesktop ? <DesktopText /> : <MobileText />}
    </div>
  );
}
