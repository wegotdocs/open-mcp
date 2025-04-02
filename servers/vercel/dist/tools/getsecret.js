import { z } from "zod";
export const toolName = `getsecret`;
export const toolDescription = `Get a single secret`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v3/secrets/{idOrName}`;
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
        "decrypt",
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
export const inputParams = z.object({ "idOrName": z.string().describe("The name or the unique identifier to which the secret belongs to."), "decrypt": z.enum(["true", "false"]).describe("Whether to try to decrypt the value of the secret. Only works if `decryptable` has been set to `true` when the secret was created.").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
