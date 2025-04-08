import { z } from "zod";
export const toolName = `submit_prepayment_balances`;
export const toolDescription = `Submit Prepayment Balances`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/billing/balance`;
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
    "query": [],
    "header": [],
    "path": [
        "integrationConfigurationId"
    ],
    "cookie": [],
    "body": [
        "timestamp",
        "balances"
    ]
};
export const flatMap = {};
export const inputParams = {
    "integrationConfigurationId": z.string(),
    "timestamp": z.string().datetime({ offset: true }).describe("Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept."),
    "balances": z.array(z.object({ "resourceId": z.string().describe("Partner's resource ID, exclude if credits are tied to the installation and not an individual resource.").optional(), "credit": z.string().describe("A human-readable description of the credits the user currently has, e.g. \\\"2,000 Tokens\\\"").optional(), "nameLabel": z.string().describe("The name of the credits, for display purposes, e.g. \\\"Tokens\\\"").optional(), "currencyValueInCents": z.number().describe("The dollar value of the credit balance, in USD and provided in cents, which is used to trigger automatic purchase thresholds.") }).strict().describe("A credit balance for a particular token type"))
};
