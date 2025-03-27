import { z } from "zod";
export const toolName = `createnewschedule`;
export const toolDescription = `The method createnewschedule creates a new schedule stored in the backup list.`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/createnewschedule`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "query": z.object({ "device_id": z.string().describe("The relay id"), "module_id": z.string().describe("The thermostat id") }).optional() }).shape;
