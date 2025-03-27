import { z } from "zod";
export const toolName = `retrieve_a_declined_transaction`;
export const toolDescription = `Retrieve a Declined Transaction`;
export const baseUrl = `https://api.increase.com`;
export const path = `/declined_transactions/{declined_transaction_id}`;
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
export const inputParams = z.object({ "path": z.object({ "declined_transaction_id": z.string().describe("The identifier of the Declined Transaction.") }).optional() }).shape;
