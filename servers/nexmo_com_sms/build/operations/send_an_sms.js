import { z } from "zod";
export const toolName = `send_an_sms`;
export const toolDescription = `Send an SMS`;
export const baseUrl = `https://rest.nexmo.com/sms`;
export const path = `/{format}`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "format": z.enum(["json", "xml"]).describe("The format of the response") }).optional() }).shape;
