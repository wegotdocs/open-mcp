import { z } from "zod";
export const toolName = `getsecrets`;
export const toolDescription = `List secrets`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v3/secrets`;
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
        "id",
        "projectId",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "id": z.string().describe("Filter out secrets based on comma separated secret ids.").optional(), "projectId": z.string().describe("Filter out secrets that belong to a project.").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
