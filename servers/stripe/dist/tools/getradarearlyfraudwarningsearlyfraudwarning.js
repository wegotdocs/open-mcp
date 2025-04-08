import { z } from "zod";
export const toolName = `getradarearlyfraudwarningsearlyfraudwarning`;
export const toolDescription = `Retrieve an early fraud warning`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/radar/early_fraud_warnings/{early_fraud_warning}`;
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
        "expand"
    ],
    "header": [],
    "path": [
        "early_fraud_warning"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "early_fraud_warning": z.string().max(5000),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional()
};
