import { z } from "zod";
export const toolName = `close_an_account`;
export const toolDescription = `Close an Account`;
export const baseUrl = `https://api.increase.com`;
export const path = `/accounts/{account_id}/close`;
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
export const inputParams = z.object({ "path": z.object({ "account_id": z.string().describe("The identifier of the Account to close.") }).optional() }).shape;
