export { inputParams } from "./schema/root.js";
export const toolName = `posttreasuryfinancialaccountsfinancialaccountfeatures`;
export const toolDescription = `Update FinancialAccount Features`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/treasury/financial_accounts/{financial_account}/features`;
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
        "financial_account"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
