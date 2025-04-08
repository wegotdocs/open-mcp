import { z } from "zod";
export const toolName = `updateprojectdomain`;
export const toolDescription = `Update a project domain`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v9/projects/{idOrName}/domains/{domain}`;
export const method = `patch`;
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
    "body": [
        "gitBranch",
        "redirect",
        "redirectStatusCode"
    ]
};
export const flatMap = {};
export const inputParams = {
    "idOrName": z.string().describe("The unique project identifier or the project name"),
    "domain": z.string().describe("The project domain name"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "gitBranch": z.string().max(250).nullable().describe("Git branch to link the project domain").optional(),
    "redirect": z.string().nullable().describe("Target destination domain for redirect").optional(),
    "redirectStatusCode": z.union([z.literal(null), z.literal(301), z.literal(302), z.literal(307), z.literal(308)]).nullable().describe("Status code for domain redirect").optional()
};
