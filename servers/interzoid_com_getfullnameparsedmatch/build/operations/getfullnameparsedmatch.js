import { z } from "zod";
export const toolName = `getfullnameparsedmatch`;
export const toolDescription = `Gets a similarity key for matching purposes for parsed full name data`;
export const baseUrl = `https://api.interzoid.com`;
export const path = `/getfullnameparsedmatch`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "firstname": z.string().describe("First name from which to generate similarity key"), "lastname": z.string().describe("Last name from which to generate similarity key") }).optional() }).shape;
