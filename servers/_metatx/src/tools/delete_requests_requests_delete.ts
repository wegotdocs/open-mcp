import { z } from "zod"

export const toolName = `delete_requests_requests_delete`
export const toolDescription = `Delete Requests`
export const baseUrl = `/metatx`
export const path = `/requests`
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

export const inputParams = z.object({}).shape