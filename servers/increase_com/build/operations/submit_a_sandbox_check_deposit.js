import { z } from "zod";
export const toolName = `submit_a_sandbox_check_deposit`;
export const toolDescription = `Submit a Sandbox Check Deposit`;
export const baseUrl = `https://api.increase.com`;
export const path = `/simulations/check_deposits/{check_deposit_id}/submit`;
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
export const inputParams = z.object({ "path": z.object({ "check_deposit_id": z.string().describe("The identifier of the Check Deposit you wish to submit.") }).optional() }).shape;
