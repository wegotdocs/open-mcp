import { z } from "zod";
export const toolName = `uploadartifact`;
export const toolDescription = `Upload a cache artifact`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v8/artifacts/{hash}`;
export const method = `put`;
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
        "x-artifact-duration",
        "x-artifact-client-ci",
        "x-artifact-client-interactive",
        "x-artifact-tag"
    ],
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
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "Content-Length": z.number().describe("The artifact size in bytes"),
    "x-artifact-duration": z.number().describe("The time taken to generate the uploaded artifact in milliseconds.").optional(),
    "x-artifact-client-ci": z.string().max(50).describe("The continuous integration or delivery environment where this artifact was generated.").optional(),
    "x-artifact-client-interactive": z.number().int().gte(0).lte(1).describe("1 if the client is an interactive shell. Otherwise 0").optional(),
    "x-artifact-tag": z.string().max(600).describe("The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag`").optional()
};
