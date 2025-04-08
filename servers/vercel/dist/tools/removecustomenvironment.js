import { z } from "zod";
export const toolName = `removecustomenvironment`;
export const toolDescription = `Remove a custom environment`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}`;
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
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "idOrName",
        "environmentSlugOrId"
    ],
    "cookie": [],
    "body": [
        "deleteUnassignedEnvironmentVariables"
    ]
};
export const flatMap = {};
export const inputParams = {
    "idOrName": z.string().describe("The unique project identifier or the project name"),
    "environmentSlugOrId": z.string().describe("The unique custom environment identifier within the project"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "deleteUnassignedEnvironmentVariables": z.boolean().describe("Delete Environment Variables that are not assigned to any environments.").optional()
};
