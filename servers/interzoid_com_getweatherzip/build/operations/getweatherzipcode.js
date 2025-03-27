import { z } from "zod";
export const toolName = `getweatherzipcode`;
export const toolDescription = `Gets current weather information for a US zip code`;
export const baseUrl = `https://api.interzoid.com`;
export const path = `/getweatherzipcode`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "zip": z.string().describe("Zip code for weather information") }).optional() }).shape;
