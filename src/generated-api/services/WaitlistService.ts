/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmailCaptchaPayload } from "../models/EmailCaptchaPayload";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class WaitlistService {
  /**
   * Create Unverified User
   * @param requestBody
   * @param xForwardedFor
   * @param userAgent
   * @returns any Successful Response
   * @throws ApiError
   */
  public static createUnverifiedUserApiWaitlistEnterPost(
    requestBody: EmailCaptchaPayload,
    xForwardedFor?: string,
    userAgent?: string
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/waitlist/enter",
      headers: {
        "x-forwarded-for": xForwardedFor,
        "user-agent": userAgent,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        409: `Conflict`,
        422: `Validation Error`,
      },
    });
  }
}
