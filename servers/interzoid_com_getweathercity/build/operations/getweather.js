import { z } from "zod";
export const toolName = `getweather`;
export const toolDescription = `Gets current weather information for a US city and state`;
export const baseUrl = `https://api.interzoid.com`;
export const path = `/getweather`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "city": z.string().describe("City for weather information"), "state": z.string().describe("State for weather information") }).optional() }).shape;
