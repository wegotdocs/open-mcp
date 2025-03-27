import { z } from "zod";
export const toolName = `simulate_an_account_statement_being_created`;
export const toolDescription = `Simulate an Account Statement being created`;
export const baseUrl = `https://api.increase.com`;
export const path = `/simulations/account_statements`;
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
export const inputParams = z.object({ "body": z.object({ "account_id": z.string().describe("The identifier of the Account the statement is for.") }).optional() }).shape;
