import { z } from "zod";
export const toolName = `getdeploymentfilecontents`;
export const toolDescription = `Get Deployment File Contents`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v7/deployments/{id}/files/{fileId}`;
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
        "path",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "id",
        "fileId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "id": z.string().describe("The unique deployment identifier"),
    "fileId": z.string().describe("The unique file identifier"),
    "path": z.string().describe("Path to the file to fetch (only for Git deployments)").optional(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
