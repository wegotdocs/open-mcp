import { z } from "zod"

export const toolName = `getpublicdata`
export const toolDescription = `Retrieves publicly shared weather data from Outdoor Modules within a predefined area.`
export const baseUrl = `https://api.netatmo.net/api`
export const path = `/getpublicdata`
export const method = `get`
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

export const inputParams = z.object({ "query": z.object({ "lat_ne": z.number().int().describe("Latitude of the north east corner of the requested area. -85 <= lat_ne <= 85 and lat_ne>lat_sw"), "lon_ne": z.number().int().describe("Longitude of the north east corner of the requested area. -180 <= lon_ne <= 180 and lon_ne>lon_sw"), "lat_sw": z.number().int().describe("Latitude of the south west corner of the requested area. -85 <= lat_sw <= 85"), "lon_sw": z.number().int().describe("Longitude of the south west corner of the requested area. -180 <= lon_sw <= 180"), "required_data": z.array(z.enum(["temperature","humidity","pressure","wind","rain"])).describe("To filter stations based on relevant measurements you want (e.g. rain will only return stations with rain gauges). Default is no filter. You can find all measurements available on the Thermostat page.").optional(), "filter": z.boolean().describe("True to exclude stations with abnormal temperature measures. Default is false.").optional() }).optional() }).shape