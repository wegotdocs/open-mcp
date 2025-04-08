import { z } from "zod"

export const toolName = `post_admin_users_invites_inviteid_resend`
export const toolDescription = `Resend Invite`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/users/invites/{inviteId}/resend`
export const method = `post`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
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
  "inviteId": z.string()
}