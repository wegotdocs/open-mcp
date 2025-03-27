import { z } from "zod";
export const toolName = `complete_a_sandbox_account_transfer`;
export const toolDescription = `Complete a Sandbox Account Transfer`;
export const baseUrl = `https://api.increase.com`;
export const path = `/simulations/account_transfers/{account_transfer_id}/complete`;
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
export const inputParams = z.object({ "path": z.object({ "account_transfer_id": z.string().describe("The identifier of the Account Transfer you wish to complete.") }).optional() }).shape;
