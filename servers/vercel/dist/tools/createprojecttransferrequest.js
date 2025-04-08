import { z } from "zod";
export const toolName = `createprojecttransferrequest`;
export const toolDescription = `Create project transfer request`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/projects/{idOrName}/transfer-request`;
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
        "callbackUrl",
        "callbackSecret"
    ]
};
export const flatMap = {};
export const inputParams = {
    "idOrName": z.string().describe("The ID or name of the project to transfer."),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "callbackUrl": z.string().describe("The URL to send a webhook to when the transfer is accepted.").optional(),
    "callbackSecret": z.string().describe("The secret to use to sign the webhook payload with HMAC-SHA256.").optional()
};
