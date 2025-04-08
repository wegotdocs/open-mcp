import { z } from "zod";
export const toolName = `uploadcert`;
export const toolDescription = `Upload a cert`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v7/certs`;
export const method = `put`;
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
    "path": [],
    "cookie": [],
    "body": [
        "ca",
        "key",
        "cert",
        "skipValidation"
    ]
};
export const flatMap = {};
export const inputParams = {
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "ca": z.string().describe("The certificate authority"),
    "key": z.string().describe("The certificate key"),
    "cert": z.string().describe("The certificate"),
    "skipValidation": z.boolean().describe("Skip validation of the certificate").optional()
};
