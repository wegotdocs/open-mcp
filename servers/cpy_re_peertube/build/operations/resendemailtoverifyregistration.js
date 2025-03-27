import { z } from "zod";
export const toolName = `resendemailtoverifyregistration`;
export const toolDescription = `Resend verification link to registration email`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/registrations/ask-send-verify-email`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "email": z.string().describe("Registration email") }).optional() }).shape;
