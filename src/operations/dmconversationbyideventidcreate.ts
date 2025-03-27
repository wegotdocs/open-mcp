import { z } from "zod"

export const toolName = `dmconversationbyideventidcreate`
export const toolDescription = `Send a new message to a DM Conversation`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/dm_conversations/{dm_conversation_id}/messages`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
  {
    "key": "Authorization",
    "value": "OAuth <mcp-env-var>OAUTH_CREDENTIALS</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH_CREDENTIALS",
    "schemeType": "http",
    "schemeScheme": "OAuth"
  }
]

export const inputParams = z.object({ "path": z.object({ "dm_conversation_id": z.string().describe("The DM Conversation ID.") }).optional(), "body": z.union([z.object({ "attachments": z.array(z.object({ "media_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("The unique identifier of this Media.") })).describe("Attachments to a DM Event.").optional(), "text": z.string().min(1).describe("Text of the message.") }), z.object({ "attachments": z.array(z.object({ "media_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("The unique identifier of this Media.") })).describe("Attachments to a DM Event."), "text": z.string().min(1).describe("Text of the message.").optional() })]).optional() }).shape