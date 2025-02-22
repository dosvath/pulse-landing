import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Widget } from "@typeform/embed-react";
import { cn } from "./lib/utils";

export default function WaitlistButton({
  className,
  customButton,
}: {
  className?: string;
  customButton?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const defaultButton = (
    <Button
      className={cn(
        "bg-white text-black h-12 text-md font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition",
        className
      )}
    >
      Join Pulse
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{customButton || defaultButton}</DialogTrigger>
      <DialogContent className="max-w-md dark text-white">
        <DialogTitle></DialogTitle>
        <div className="overflow-hidden rounded-lg h-[270px]">
          {open && <Widget id="booPZMe3" className="h-[300px]" />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
