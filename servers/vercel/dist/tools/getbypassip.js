import { z } from "zod";
export const toolName = `getbypassip`;
export const toolDescription = `Read System Bypass`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/security/firewall/bypass`;
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
        "projectId",
        "limit",
        "sourceIp",
        "domain",
        "projectScope",
        "offset",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "projectId": z.string(), "limit": z.number().lte(128).optional(), "sourceIp": z.string().max(49).describe("Filter by source IP").optional(), "domain": z.string().regex(new RegExp("([a-z]+[a-z.]+)$")).max(2544).describe("Filter by domain").optional(), "projectScope": z.boolean().describe("Filter by project scoped rules").optional(), "offset": z.string().max(2560).describe("Used for pagination. Retrieves results after the provided id").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
