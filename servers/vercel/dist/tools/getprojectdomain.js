import { z } from "zod";
export const toolName = `getprojectdomain`;
export const toolDescription = `Get a project domain`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v9/projects/{idOrName}/domains/{domain}`;
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
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "idOrName",
        "domain"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "idOrName": z.string().describe("The unique project identifier or the project name"),
    "domain": z.string().describe("The project domain name"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
