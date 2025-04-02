import { z } from "zod";
export const toolName = `getdomains`;
export const toolDescription = `List all the domains`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v5/domains`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "limit",
        "since",
        "until",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "limit": z.number().describe("Maximum number of domains to list from a request.").optional(), "since": z.number().describe("Get domains created after this JavaScript timestamp.").optional(), "until": z.number().describe("Get domains created before this JavaScript timestamp.").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
