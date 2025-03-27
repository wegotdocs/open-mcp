import { z } from "zod";
export const toolName = `getfullnamematch`;
export const toolDescription = `Gets a similarity key for matching purposes for full name data`;
export const baseUrl = `https://api.interzoid.com`;
export const path = `/getfullnamematch`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "fullname": z.string().describe("Full name from which to generate similarity key") }).optional() }).shape;
