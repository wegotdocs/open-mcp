import { z } from "zod";
export const toolName = `customeventslist`;
export const toolDescription = `Custom Events List`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/events/list`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "page": z.string().describe("(Optional) Integer\n\nThe page of event names to return, defaults to 0 (returns the first set of up to 250)").optional() }).optional() }).shape;
