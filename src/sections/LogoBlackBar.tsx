import logo from "@/assets/logo-w-text.svg";

export default function LogoBlackBar() {
  return (
    <div className="w-full p-4 md:pt-6 bg-black">
      <div className="flex max-w-7xl mx-auto">
        <img src={logo} alt="Pulse Logo" className="h-8" />
      </div>
    </div>
  );
}
