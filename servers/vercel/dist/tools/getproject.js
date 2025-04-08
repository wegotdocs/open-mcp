import { z } from "zod";
export const toolName = `getproject`;
export const toolDescription = `Find a project by id or name`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v9/projects/{idOrName}`;
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
        "idOrName"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "idOrName": z.any().superRefine((x, ctx) => {
        const schemas = [z.string(), z.boolean()];
        const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
        if (schemas.length - errors.length !== 1) {
            ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
            });
        }
    }).describe("The unique project identifier or the project name"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
