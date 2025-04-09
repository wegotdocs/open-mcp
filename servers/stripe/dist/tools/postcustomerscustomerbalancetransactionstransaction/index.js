export { inputParams } from "./schema/root.js";
export const toolName = `postcustomerscustomerbalancetransactionstransaction`;
export const toolDescription = `Update a customer credit balance transaction`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/customers/{customer}/balance_transactions/{transaction}`;
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
        "customer",
        "transaction"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
