import { z } from "zod";
export const toolName = `postaccountsaccountcapabilitiescapability`;
export const toolDescription = `Update an Account Capability`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/accounts/{account}/capabilities/{capability}`;
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
        "account",
        "capability"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "account": z.string().max(5000), "capability": z.string() }).shape;
