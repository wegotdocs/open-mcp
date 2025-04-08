import { z } from "zod";
export const toolName = `issuecert`;
export const toolDescription = `Issue a new cert`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v7/certs`;
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
    "path": [],
    "cookie": [],
    "body": [
        "cns"
    ]
};
export const flatMap = {};
export const inputParams = {
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "cns": z.array(z.string()).describe("The common names the cert should be issued for").optional()
};
