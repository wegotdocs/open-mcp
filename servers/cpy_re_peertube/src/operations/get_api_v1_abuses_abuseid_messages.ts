import { z } from "zod"

export const toolName = `get_api_v1_abuses_abuseid_messages`
export const toolDescription = `List messages of an abuse`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/abuses/{abuseId}/messages`
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

export const inputParams = z.object({ "path": z.object({ "abuseId": z.number().int().gte(1).describe("Abuse id") }).optional() }).shape