import { z } from "zod";
export const toolName = `listservices`;
export const toolDescription = `Information about the linear services used for broadcast transmissions`;
export const baseUrl = `https://programmes.api.bbc.com`;
export const path = `/services`;
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
export const inputParams = z.object({ "query": z.object({ "end_from": z.string().datetime({ offset: true }).describe("Return services that end on or later than the specified datetime").optional(), "end_to": z.string().datetime({ offset: true }).describe("filter for subset of broadcasts that end on or earlier than the specified datetime").optional(), "mid": z.array(z.string()).describe("filter for services by masterbrand MID").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "partner_id": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for services by partner ID").optional(), "partner_pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for services by partner PID").optional(), "q": z.string().describe("filter for subset of services matching supplied keyword/phrase (boolean operators permitted)").optional(), "service_type": z.array(z.enum(["Interactive", "Local Radio", "Master Brand Only", "National Radio", "On Demand", "Regional Radio", "Simulcast", "TV", "Web Only", "Webcast"])).describe("filter for specified type of linear services").optional(), "sid": z.array(z.string()).describe("filter for specified linear service").optional(), "start_from": z.string().datetime({ offset: true }).describe("Return services that start on or later than the specified datetime").optional(), "start_to": z.string().datetime({ offset: true }).describe("Return services that start earlier than the specified datetime").optional() }).optional() }).shape;
