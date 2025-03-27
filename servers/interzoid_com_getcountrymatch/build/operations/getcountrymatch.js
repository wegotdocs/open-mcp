import { z } from "zod";
export const toolName = `getcountrymatch`;
export const toolDescription = `Gets a similarity key for matching purposes for country name data`;
export const baseUrl = `https://api.interzoid.com`;
export const path = `/getcountrymatch`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "license": z.string().describe("Your Interzoid license API key. Register at www.interzoid.com/register"), "country": z.string().describe("Country name from which to generate similarity key") }).optional() }).shape;
