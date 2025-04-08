import { z } from "zod";
export const toolName = `addbypassip`;
export const toolDescription = `Create System Bypass Rule`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/security/firewall/bypass`;
export const method = `post`;
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
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "domain",
        "projectScope",
        "sourceIp",
        "allSources",
        "ttl",
        "note"
    ]
};
export const flatMap = {};
export const inputParams = {
    "projectId": z.string(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "domain": z.string().regex(new RegExp("([a-z]+[a-z.]+)$")).max(2544).optional(),
    "projectScope": z.boolean().describe("If the specified bypass will apply to all domains for a project.").optional(),
    "sourceIp": z.string().optional(),
    "allSources": z.boolean().optional(),
    "ttl": z.number().describe("Time to live in milliseconds").optional(),
    "note": z.string().max(500).optional()
};
