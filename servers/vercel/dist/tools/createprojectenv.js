import { z } from "zod";
export const toolName = `createprojectenv`;
export const toolDescription = `Create one or more environment variables`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v10/projects/{idOrName}/env`;
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
        "upsert",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "idOrName"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "idOrName": z.string().describe("The unique project identifier or the project name"), "upsert": z.string().describe("Allow override of environment variable if it already exists").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
