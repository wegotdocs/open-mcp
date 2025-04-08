import { z } from "zod"

export const toolName = `deleteteaminvitecode`
export const toolDescription = `Delete a Team invite code`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/teams/{teamId}/invites/{inviteId}`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "inviteId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "inviteId": z.string().describe("The Team invite code ID.")
}