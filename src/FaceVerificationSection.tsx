import faceVerification from "@/assets/face-verification.avif";

export default function FaceVerificationSection() {
  return (
    <div className="flex flex-col md:flex-row items-center px-8 justify-between w-full mx-auto max-w-6xl gap-5">
      <div className="flex flex-col gap-5">
        <div className="text-2xl font-medium gap-y-1 justify-center text-center md:text-left">
          No fakes. <br />
          Face verification required.
        </div>
        <div className="text-zinc-500 font-medium md:max-w-md mx-auto text-center md:text-left">
          Video face and liveness verification is required for all members
          before joining Pulse.
        </div>
      </div>
      <img
        src={faceVerification}
        className="max-w-[500px] w-full mt-6 md:m-0"
      />
    </div>
  );
}
