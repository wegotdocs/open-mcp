import { z } from "zod";
export const toolName = `updateprojectprotectionbypass`;
export const toolDescription = `Update Protection Bypass for Automation`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/projects/{idOrName}/protection-bypass`;
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
        "idOrName"
    ],
    "cookie": [],
    "body": [
        "revoke",
        "generate"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "idOrName": z.string().describe("The unique project identifier or the project name"), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "revoke": z.object({ "secret": z.string().describe("Automation bypass to revoked"), "regenerate": z.boolean().describe("Whether or not a new automation bypass should be created after the provided secret is revoked") }).describe("Optional instructions for revoking and regenerating a automation bypass").optional(), "generate": z.object({ "secret": z.string().regex(new RegExp("^[a-zA-Z0-9]{32}$")).describe("Optional value of the secret to generate").optional() }).describe("Generate a new secret. If neither generate or revoke are provided, a new random secret will be generated.").optional() }).shape;
