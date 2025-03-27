import { z } from "zod"

export const toolName = `delete_api_v1_abuses_abuseid_`
export const toolDescription = `Delete an abuse`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/abuses/{abuseId}`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "abuseId": z.number().int().gte(1).describe("Abuse id") }).optional() }).shape