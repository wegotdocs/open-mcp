import { z } from "zod";
export const toolName = `verifyregistrationemail`;
export const toolDescription = `Verify a registration email`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/registrations/{registrationId}/verify-email`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "registrationId": z.number().int().gte(1).describe("Registration ID") }).optional(), "body": z.object({ "verificationString": z.string() }).optional() }).shape;
