import couple from "@/assets/couple.avif";
import WaitlistButton from "./WaitlistButton";

export default function CtaSection() {
  return (
    <div className="relative w-full mt-16">
      <div className="h-[45vh] overflow-hidden">
        <img
          src={couple}
          className="w-full h-full object-cover opacity-30"
          alt="Couple"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <div className="text-4xl font-medium gap-y-1 justify-center text-center">
          Date up. <br className="md:hidden" /> Don't Settle.
        </div>
        {/* <Button
          asChild
          className="bg-white text-black h-12 text-md font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition"
        >
          <a href="https://staging.pulse-date.com/#/sign-up">Join Pulse</a>
        </Button> */}
        <WaitlistButton />
      </div>
    </div>
  );
}
