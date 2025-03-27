import { z } from "zod";
export const toolName = `retrieve_a_check_deposit`;
export const toolDescription = `Retrieve a Check Deposit`;
export const baseUrl = `https://api.increase.com`;
export const path = `/check_deposits/{check_deposit_id}`;
export const method = `get`;
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
export const inputParams = z.object({ "path": z.object({ "check_deposit_id": z.string().describe("The identifier of the Check Deposit to retrieve.") }).optional() }).shape;
