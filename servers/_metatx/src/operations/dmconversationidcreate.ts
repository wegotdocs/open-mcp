import { z } from "zod"

export const toolName = `dmconversationidcreate`
export const toolDescription = `Create a new DM Conversation`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/dm_conversations`
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

export const inputParams = z.object({ "body": z.object({ "conversation_type": z.literal("Group").describe("The conversation type that is being created."), "message": z.union([z.object({ "attachments": z.array(z.object({ "media_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("The unique identifier of this Media.") })).describe("Attachments to a DM Event.").optional(), "text": z.string().min(1).describe("Text of the message.") }), z.object({ "attachments": z.array(z.object({ "media_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("The unique identifier of this Media.") })).describe("Attachments to a DM Event."), "text": z.string().min(1).describe("Text of the message.").optional() })]), "participant_ids": z.array(z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.")).min(2).max(49).describe("Participants for the DM Conversation.") }).strict().optional() }).shape