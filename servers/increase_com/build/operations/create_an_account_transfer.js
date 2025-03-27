import { z } from "zod";
export const toolName = `create_an_account_transfer`;
export const toolDescription = `Create an Account Transfer`;
export const baseUrl = `https://api.increase.com`;
export const path = `/account_transfers`;
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
export const inputParams = z.object({ "body": z.object({ "account_id": z.string().describe("The identifier for the account that will send the transfer."), "amount": z.number().int().gte(1).describe("The transfer amount in the minor unit of the account currency. For dollars, for example, this is cents."), "description": z.string().min(1).max(200).describe("The description you choose to give the transfer."), "destination_account_id": z.string().describe("The identifier for the account that will receive the transfer."), "require_approval": z.boolean().describe("Whether the transfer requires explicit approval via the dashboard or API.").optional() }).optional() }).shape;
