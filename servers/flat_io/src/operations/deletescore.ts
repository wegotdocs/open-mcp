import { z } from "zod"

export const toolName = `deletescore`
export const toolDescription = `Delete a score`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/scores/{score}`
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

export const inputParams = z.object({ "query": z.object({ "now": z.boolean().describe("If `true`, the score deletion will be scheduled to be done ASAP") }).optional() }).shape