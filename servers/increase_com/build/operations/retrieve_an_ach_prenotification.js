import { z } from "zod";
export const toolName = `retrieve_an_ach_prenotification`;
export const toolDescription = `Retrieve an ACH Prenotification`;
export const baseUrl = `https://api.increase.com`;
export const path = `/ach_prenotifications/{ach_prenotification_id}`;
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
export const inputParams = z.object({ "path": z.object({ "ach_prenotification_id": z.string().describe("The identifier of the ACH Prenotification to retrieve.") }).optional() }).shape;
