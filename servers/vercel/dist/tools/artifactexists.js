import { z } from "zod";
export const toolName = `artifactexists`;
export const toolDescription = `Check if a cache artifact exists`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v8/artifacts/{hash}`;
export const method = `head`;
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
    "path": [
        "hash"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "hash": z.string().describe("The artifact hash"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
