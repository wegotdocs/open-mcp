import { z } from "zod";
export const toolName = `listavailability`;
export const toolDescription = `Discover details of on-demand availability for programmes and their versions`;
export const baseUrl = `https://programmes.api.bbc.com`;
export const path = `/availabilities`;
export const method = `get`;
export const security = [
    {
        "key": "api_key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api_key"
    }
];
export const inputParams = z.object({ "query": z.object({ "sort": z.literal("scheduled_start").describe("Sorts:\n* scheduled_start: sort chronologically by scheduled start time/date, ascending\n").optional(), "sort_direction": z.enum(["ascending", "descending"]).describe("Sort direction").optional(), "availability": z.array(z.literal("available")).describe("filter for subset of availabilities").optional(), "descendants_of": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of availabilities that have PID as ancestor").optional(), "media_set": z.array(z.string()).describe("filter for subset of availabilities with media set").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "territory": z.array(z.enum(["uk", "nonuk", "world"])).describe("filter for availabilities in given territory").optional(), "debug": z.boolean().describe("Turn on debug information (undocumented)").optional() }).optional() }).shape;
