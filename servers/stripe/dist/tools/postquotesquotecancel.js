import { z } from "zod";
export const toolName = `postquotesquotecancel`;
export const toolDescription = `Cancel a quote`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/quotes/{quote}/cancel`;
export const method = `post`;
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
    "query": [],
    "header": [],
    "path": [
        "quote"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "quote": z.string().max(5000)
};
