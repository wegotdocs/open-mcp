import { z } from "zod";
export const toolName = `uploadfile`;
export const toolDescription = `Upload Deployment Files`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/files`;
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
        "Content-Length",
        "x-vercel-digest",
        "x-now-digest",
        "x-now-size"
    ],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "Content-Length": z.number().describe("The file size in bytes").optional(),
    "x-vercel-digest": z.string().max(40).describe("The file SHA1 used to check the integrity").optional(),
    "x-now-digest": z.string().max(40).describe("The file SHA1 used to check the integrity").optional(),
    "x-now-size": z.number().describe("The file size as an alternative to `Content-Length`").optional()
};
