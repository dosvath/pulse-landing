import { useMutation } from "@tanstack/react-query";
import { OpenAPI } from "../generated-api/core/OpenAPI";
import { EmailCaptchaPayload } from "../generated-api/models/EmailCaptchaPayload";
import { WaitlistService } from "../generated-api/services/WaitlistService";

OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL;

export const useEnterWaitlist = () => {
  return useMutation({
    mutationKey: ["createUnverifiedUser"],
    mutationFn: (data: EmailCaptchaPayload) =>
      WaitlistService.createUnverifiedUserApiWaitlistEnterPost(data),
  });
};
