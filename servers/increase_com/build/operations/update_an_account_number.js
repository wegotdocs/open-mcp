import { z } from "zod";
export const toolName = `update_an_account_number`;
export const toolDescription = `Update an Account Number`;
export const baseUrl = `https://api.increase.com`;
export const path = `/account_numbers/{account_number_id}`;
export const method = `patch`;
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
export const inputParams = z.object({ "path": z.object({ "account_number_id": z.string().describe("The identifier of the Account Number.") }).optional(), "body": z.object({ "name": z.string().min(1).max(200).describe("The name you choose for the Account Number.").optional(), "status": z.enum(["active", "disabled", "canceled"]).describe("This indicates if transfers can be made to the Account Number.").optional() }).optional() }).shape;
