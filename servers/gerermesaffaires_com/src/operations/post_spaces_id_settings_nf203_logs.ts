import { z } from "zod"

export const toolName = `post_spaces_id_settings_nf203_logs`
export const toolDescription = `Enable/Disable logs`
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`
export const path = `/spaces/{id}/settings/nf203/logs`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space") }).optional(), "body": z.object({ "Enabled": z.boolean().optional() }).optional() }).shape