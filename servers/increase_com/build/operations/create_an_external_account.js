import { z } from "zod";
export const toolName = `create_an_external_account`;
export const toolDescription = `Create an External Account`;
export const baseUrl = `https://api.increase.com`;
export const path = `/external_accounts`;
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
export const inputParams = z.object({ "body": z.object({ "account_number": z.string().min(1).max(17).describe("The account number for the destination account."), "description": z.string().min(1).max(200).describe("The name you choose for the Account."), "funding": z.enum(["checking", "savings", "other"]).describe("The type of the destination account. Defaults to `checking`.").optional(), "routing_number": z.string().min(9).max(9).describe("The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.") }).optional() }).shape;
