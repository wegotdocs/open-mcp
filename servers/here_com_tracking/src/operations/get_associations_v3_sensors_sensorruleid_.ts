import { z } from "zod"

export const toolName = `get_associations_v3_sensors_sensorruleid_`
export const toolDescription = `Gets all devices associated with a sensor rule`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/associations/v3/sensors/{sensorRuleId}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "count": z.number().int().gte(1).lte(100).describe("The number of items to return per page.") }).optional() }).shape