import { z } from "zod";
export const toolName = `createortransferdomain`;
export const toolDescription = `Register or transfer-in a new Domain`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v5/domains`;
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
        "method"
    ]
};
export const flatMap = {};
export const inputParams = {
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "method": z.string().describe("The domain operation to perform. It can be either `add` or `transfer-in`.").optional()
};
