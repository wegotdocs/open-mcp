import { z } from "zod";
export const toolName = `get_form_responses`;
export const toolDescription = `List form responses`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/form-responses`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "user": z.string().describe("Restrict results to responses submitted by this user.").optional(), "form": z.string().describe("Restrict results to responses submitted to this form.").optional(), "contribution": z.string().describe("Restrict results to responses relating to this contribution.").optional() }).optional() }).shape;
