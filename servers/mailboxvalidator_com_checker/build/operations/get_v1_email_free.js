import { z } from "zod";
export const toolName = `get_v1_email_free`;
export const toolDescription = `The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.`;
export const baseUrl = `https://api.mailboxvalidator.com`;
export const path = `/v1/email/free`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "format": z.enum(["json", "xml"]).describe("Return the result in json (default) or xml format.").optional(), "email": z.string().describe("The email address to check if is from a free email provider."), "key": z.string().describe("API key.") }).optional() }).shape;
