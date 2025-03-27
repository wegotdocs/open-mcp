import { z } from "zod"

export const toolName = `setthermpoint`
export const toolDescription = `The method setthermpoint changes the Thermostat manual temperature setpoint.`
export const baseUrl = `https://api.netatmo.net/api`
export const path = `/setthermpoint`
export const method = `post`
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
]

export const inputParams = z.object({ "query": z.object({ "device_id": z.string().describe("The relay id"), "module_id": z.string().describe("The thermostat id"), "setpoint_mode": z.enum(["program","away","hg","manual","off","max"]).describe("Chosen setpoint_mode"), "setpoint_endtime": z.number().int().describe("When using the manual or max setpoint_mode, this parameter defines when the setpoint expires.").optional(), "setpoint_temp": z.number().describe("When using the manual setpoint_mode, this parameter defines the temperature setpoint (in Celcius) to use.").optional() }).optional() }).shape