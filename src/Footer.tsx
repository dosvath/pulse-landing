import instagram from "@/assets/instagram.svg";
import xIcon from "@/assets/x-social-media.svg";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-4 gap-x-6 mb-8 w-full px-8 mx-auto max-w-6xl text-zinc-400 text-sm">
      <div>© 2025 Pulse. All Rights Reserved.</div>
      <div className="flex flex-col md:flex-row gap-y-4 gap-x-10 text-center md:text-left">
        <div>Terms of Service</div>
        <div>Privacy </div>
        <div className="flex justify-center items-center md:justify-start w-full md:w-auto gap-4">
          <img
            src={xIcon}
            alt="X Logo"
            className="w-6 h-6 cursor-pointer text-center"
          />
          <img
            src={instagram}
            alt="Instagram Logo"
            className="w-6 h-6 cursor-pointer text-center"
          />
        </div>
      </div>
    </div>
  );
}
