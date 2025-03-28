import { z } from "zod"

export const toolName = `retrieve_invite`
export const toolDescription = `Retrieves an invite.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/invites/{invite_id}`
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

export const inputParams = z.object({ "path": z.object({ "invite_id": z.string().describe("The ID of the invite to retrieve.") }).optional() }).shape