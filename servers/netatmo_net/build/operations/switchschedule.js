import { z } from "zod";
export const toolName = `switchschedule`;
export const toolDescription = `The method switchschedule switches the Thermostat's schedule to another existing schedule.`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/switchschedule`;
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
export const inputParams = z.object({ "query": z.object({ "device_id": z.string().describe("The relay id"), "module_id": z.string().describe("The thermostat id"), "schedule_id": z.string().describe("The schedule id. It can be found in the getthermstate response, under the keys `therm_program_backup` and `therm_program`.\n") }).optional() }).shape;
