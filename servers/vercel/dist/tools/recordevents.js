import { z } from "zod";
export const toolName = `recordevents`;
export const toolDescription = `Record an artifacts cache usage event`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v8/artifacts/events`;
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
    "header": [
        "x-artifact-client-ci",
        "x-artifact-client-interactive"
    ],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "x-artifact-client-ci": z.string().max(50).describe("The continuous integration or delivery environment where this artifact is downloaded.").optional(),
    "x-artifact-client-interactive": z.number().int().gte(0).lte(1).describe("1 if the client is an interactive shell. Otherwise 0").optional()
};
