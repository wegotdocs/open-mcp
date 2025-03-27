import { z } from "zod"

export const toolName = `get_device_pinners_id`
export const toolDescription = `Get device pin`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/device_pinners/{device_pinner_id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "device_pinner_id": z.string().describe("The ID of the device pin") }).optional() }).shape