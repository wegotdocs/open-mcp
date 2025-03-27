import { z } from "zod";
export const toolName = `getstateabbreviation`;
export const toolDescription = `Gets a two-letter abbreviation for a state or province name data`;
export const baseUrl = `https://api.interzoid.com`;
export const path = `/getstateabbreviation`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "state": z.string().describe("State (or province) name from which to retrieve the two letter abbreviation.") }).optional() }).shape;
