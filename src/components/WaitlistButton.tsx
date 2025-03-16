import { useState, ReactNode, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "../lib/utils";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEnterWaitlist } from "../hooks/tanstack-hooks";
import { ApiError } from "../generated-api/core/ApiError";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { PlatformLanguage } from "@/generated-api/models/PlatformLanguage";
import { TRANSLATIONS } from "@/lib/translations";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export default function WaitlistButton({
  language,
  className,
  customButton,
}: {
  language: PlatformLanguage;
  className?: string;
  customButton?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const [captcha, setCaptcha] = useState("");
  const captchaRef = useRef(null);

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (!open) {
      form.reset();
      form.clearErrors();
      setCaptcha("");
      if (captchaRef.current) {
        //@ts-expect-error - resetCaptcha is not in the types
        captchaRef.current.resetCaptcha();
      }
    }
  }, [open, form]);

  const enterWaitlistMutation = useEnterWaitlist();

  function handleEnterWaitlist(values: z.infer<typeof emailSchema>) {
    if (!captcha) {
      form.setError("email", {
        type: "manual",
        message: "Please complete the captcha.",
      });
      return;
    }

    enterWaitlistMutation.mutate(
      { email: values.email.toLowerCase(), hcaptcha_token: captcha },
      {
        onSuccess: () => {
          setOpen(false);
        },
        onError: (error) => {
          const err = error as ApiError;
          if (err.status === 409) {
            form.setError("email", {
              type: "manual",
              message:
                TRANSLATIONS[language].WAITLIST_MODAL.ALREADY_ON_WAITLIST,
            });
          } else if (err.status === 400) {
            form.setError("email", {
              type: "manual",
              message: TRANSLATIONS[language].WAITLIST_MODAL.INVALID_EMAIL,
            });
          } else {
            form.setError("email", {
              type: "manual",
              message: TRANSLATIONS[language].WAITLIST_MODAL.UNKNOWN_ERROR,
            });
          }
        },
      }
    );
  }

  const defaultButton = (
    <Button
      className={cn(
        "bg-white text-black h-12 text-md font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition",
        className
      )}
    >
      {TRANSLATIONS[language].HEADER.JOIN_PULSE_BUTTON}
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{customButton || defaultButton}</DialogTrigger>
      <DialogContent className="max-w-md dark text-white">
        <DialogTitle className="mb-4 font-light">
          {TRANSLATIONS[language].WAITLIST_MODAL.TITLE}
        </DialogTitle>
        <Form {...form}>
          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(handleEnterWaitlist)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      className="text-base border-0 border-b rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 max-w-sm"
                      placeholder="name@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <HCaptcha
              sitekey="7d024622-7514-41d2-bca4-bc86bdb04cf0"
              onVerify={(token) => setCaptcha(token)}
              theme={"dark"}
              ref={captchaRef}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={enterWaitlistMutation.isPending || !captcha}
            >
              {enterWaitlistMutation.isPending
                ? TRANSLATIONS[language].WAITLIST_MODAL.SENDING_BUTTON
                : TRANSLATIONS[language].WAITLIST_MODAL.CONTINUE_BUTTON}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
