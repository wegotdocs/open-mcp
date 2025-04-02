import { z } from "zod";
export const toolName = `updateattackchallengemode`;
export const toolDescription = `Update Attack Challenge mode`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/security/attack-mode`;
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
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "projectId",
        "attackModeEnabled",
        "attackModeActiveUntil"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "projectId": z.string(), "attackModeEnabled": z.boolean(), "attackModeActiveUntil": z.number().nullable().optional() }).shape;
