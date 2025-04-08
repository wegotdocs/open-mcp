import { z } from "zod";
export const toolName = `listaliases`;
export const toolDescription = `List aliases`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v4/aliases`;
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
        "domain",
        "from",
        "limit",
        "projectId",
        "since",
        "until",
        "rollbackDeploymentId",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "domain": z.any().superRefine((x, ctx) => {
        const schemas = [z.array(z.any()), z.string()];
        const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
        if (schemas.length - errors.length !== 1) {
            ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
            });
        }
    }).describe("Get only aliases of the given domain name").optional(),
    "from": z.number().describe("Get only aliases created after the provided timestamp").optional(),
    "limit": z.number().describe("Maximum number of aliases to list from a request").optional(),
    "projectId": z.string().describe("Filter aliases from the given `projectId`").optional(),
    "since": z.number().describe("Get aliases created after this JavaScript timestamp").optional(),
    "until": z.number().describe("Get aliases created before this JavaScript timestamp").optional(),
    "rollbackDeploymentId": z.string().describe("Get aliases that would be rolled back for the given deployment").optional(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
