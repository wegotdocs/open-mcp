import { z } from "zod";
export const toolName = `getglobaltime`;
export const toolDescription = `Gets the current time for a global locale`;
export const baseUrl = `https://api.interzoid.com`;
export const path = `/getglobaltime`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "locale": z.string().describe("Geographic locale to get the current time for") }).optional() }).shape;
