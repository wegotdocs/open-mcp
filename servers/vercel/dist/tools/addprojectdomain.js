import { z } from "zod";
export const toolName = `addprojectdomain`;
export const toolDescription = `Add a domain to a project`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v10/projects/{idOrName}/domains`;
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
    "header": [],
    "path": [
        "idOrName"
    ],
    "cookie": [],
    "body": [
        "name",
        "gitBranch",
        "customEnvironmentId",
        "redirect",
        "redirectStatusCode"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "idOrName": z.string().describe("The unique project identifier or the project name"), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "name": z.string().describe("The project domain name"), "gitBranch": z.string().max(250).nullable().describe("Git branch to link the project domain").optional(), "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(), "redirect": z.string().nullable().describe("Target destination domain for redirect").optional(), "redirectStatusCode": z.union([z.literal(null), z.literal(301), z.literal(302), z.literal(307), z.literal(308)]).nullable().describe("Status code for domain redirect").optional() }).shape;
