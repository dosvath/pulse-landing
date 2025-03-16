import instagram from "@/assets/instagram.svg";
import logo from "@/assets/logo-w-text.svg";
import { Button } from "./components/ui/button";
import WaitlistButton from "./components/WaitlistButton";

export function Header() {
  return (
    <div className="w-full justify-between p-4 md:pt-6 flex max-w-7xl mx-auto">
      <img src={logo} alt="Pulse Logo" className="h-8" />
      <div className="flex flex-row md:space-x-4 items-center">
        {/* <Button
          variant="ghost"
          className="border border-white hover:bg-white/10"
          asChild
        >
          <a href="https://app.pulse-date.com">Login</a>
        </Button> */}
        <WaitlistButton
          customButton={
            <Button
              variant="ghost"
              className="border border-white hover:bg-white/10"
            >
              Login
            </Button>
          }
        />
        <a
          href="https://instagram.com/pulsedating"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <img
            src={instagram}
            alt="Instagram Logo"
            className="w-6 h-6 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
