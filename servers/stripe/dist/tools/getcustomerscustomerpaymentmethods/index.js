export { inputParams } from "./schema/root.js";
export const toolName = `getcustomerscustomerpaymentmethods`;
export const toolDescription = `List a Customer's PaymentMethods`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/customers/{customer}/payment_methods`;
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
        "allow_redisplay",
        "ending_before",
        "expand",
        "limit",
        "starting_after",
        "type"
    ],
    "header": [],
    "path": [
        "customer"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
