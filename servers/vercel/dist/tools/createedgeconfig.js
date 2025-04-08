import { z } from "zod";
export const toolName = `createedgeconfig`;
export const toolDescription = `Create an Edge Config`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/edge-config`;
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
        "b_slug",
        "items"
    ]
};
export const flatMap = {
    "b_slug": "slug"
};
export const inputParams = {
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "b_slug": z.string().regex(new RegExp("^[\\\\w-]+$")).max(64),
    "items": z.record(z.any()).optional()
};
