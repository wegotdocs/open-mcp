import { z } from "zod";
export const toolName = `removeprojectenv`;
export const toolDescription = `Remove an environment variable`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v9/projects/{idOrName}/env/{id}`;
export const method = `delete`;
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
        "customEnvironmentId",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "idOrName",
        "id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "idOrName": z.string().describe("The unique project identifier or the project name"), "id": z.string().describe("The unique environment variable identifier"), "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
