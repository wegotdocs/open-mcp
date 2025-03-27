import { z } from "zod";
export const toolName = `retrieve_a_check_transfer`;
export const toolDescription = `Retrieve a Check Transfer`;
export const baseUrl = `https://api.increase.com`;
export const path = `/check_transfers/{check_transfer_id}`;
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
export const inputParams = z.object({ "path": z.object({ "check_transfer_id": z.string().describe("The identifier of the Check Transfer.") }).optional() }).shape;
