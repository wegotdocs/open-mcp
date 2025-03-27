import { z } from "zod";
export const toolName = `listpeople`;
export const toolDescription = `Find the people behind and in programmes: cast, crew, guests and more`;
export const baseUrl = `https://programmes.api.bbc.com`;
export const path = `/people`;
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
export const inputParams = z.object({ "query": z.object({ "authority": z.string().describe("filter for subset of people that have an ID issued by the given authority").optional(), "has_external_id": z.array(z.enum(["true", "false"])).describe("filter for people who have an external identifier").optional(), "id": z.array(z.string()).describe("filter for subset of people having given ID").optional(), "id_type": z.string().describe("filter for subset of people that have given an ID of the given type").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "partner_id": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for people by partner ID").optional(), "partner_pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for people by partner PID").optional(), "pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of people having given PID").optional(), "programme": z.string().describe("filter for subset of people that have contributed to the given programme pid").optional(), "q": z.string().describe("filter for subset of people matching supplied keyword/phrase (boolean operators permitted)").optional() }).optional() }).shape;
