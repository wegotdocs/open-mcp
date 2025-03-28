import { z } from "zod"

export const toolName = `delete_invite`
export const toolDescription = `Delete an invite. If the invite has already been accepted, it cannot be deleted.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/invites/{invite_id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "invite_id": z.string().describe("The ID of the invite to delete.") }).optional() }).shape