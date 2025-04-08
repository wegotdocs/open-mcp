import { z } from "zod";
export const toolName = `deletesecret`;
export const toolDescription = `Delete a secret`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/secrets/{idOrName}`;
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
        "idOrName"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "idOrName": z.string().describe("The name or the unique identifier to which the secret belongs to."),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
