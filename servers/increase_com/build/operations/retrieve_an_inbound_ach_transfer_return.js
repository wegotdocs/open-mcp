import { z } from "zod";
export const toolName = `retrieve_an_inbound_ach_transfer_return`;
export const toolDescription = `Retrieve an Inbound ACH Transfer Return`;
export const baseUrl = `https://api.increase.com`;
export const path = `/inbound_ach_transfer_returns/{inbound_ach_transfer_return_id}`;
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
export const inputParams = z.object({ "path": z.object({ "inbound_ach_transfer_return_id": z.string().describe("The identifier of the Inbound ACH Transfer Return to retrieve.") }).optional() }).shape;
