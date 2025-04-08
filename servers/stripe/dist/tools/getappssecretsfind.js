import { z } from "zod";
export const toolName = `getappssecretsfind`;
export const toolDescription = `Find a Secret`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/apps/secrets/find`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
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
        "expand",
        "name",
        "scope"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
    "name": z.string().max(5000).describe("A name for the secret that's unique within the scope."),
    "scope": z.object({ "type": z.enum(["account", "user"]), "user": z.string().max(5000).optional() }).describe("Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.")
};
