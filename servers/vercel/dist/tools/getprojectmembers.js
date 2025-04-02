import { z } from "zod";
export const toolName = `getprojectmembers`;
export const toolDescription = `List project members`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/projects/{idOrName}/members`;
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
        "limit",
        "since",
        "until",
        "search",
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
export const inputParams = z.object({ "idOrName": z.string().describe("The ID or name of the Project."), "limit": z.number().int().gte(1).lte(100).describe("Limit how many project members should be returned").optional(), "since": z.number().int().describe("Timestamp in milliseconds to only include members added since then.").optional(), "until": z.number().int().describe("Timestamp in milliseconds to only include members added until then.").optional(), "search": z.string().describe("Search project members by their name, username, and email.").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
