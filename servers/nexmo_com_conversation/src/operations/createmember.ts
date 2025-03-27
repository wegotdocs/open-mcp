import { z } from "zod"

export const toolName = `createmember`
export const toolDescription = `Create a member`
export const baseUrl = `https://api.nexmo.com/v0.1`
export const path = `/conversations/{conversation_id}/members`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "action": z.enum(["invite","join"]).describe("Invite or join a member to a conversation").optional(), "channel": z.object({ "from": z.object({ "type": z.string().describe("The type of connection. Must be `app`"), "user": z.string().describe("The username to connect to") }).describe("Connect to an App User").optional(), "leg_id": z.string().describe("The id of the leg. rtc_id and call_id are leg id").optional(), "leg_ids": z.array(z.any()).describe("Leg ids associated with this Channel. The first item in the array represents the main active Leg. The second item, if exists, represents a screen-share Leg.").optional(), "to": z.object({ "type": z.string().describe("The type of connection. Must be `app`"), "user": z.string().describe("The username to connect to") }).describe("Connect to an App User").optional(), "type": z.enum(["app","phone","sip","websocket","vbc"]).describe("Channel type").optional() }).describe("A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`"), "knocking_id": z.string().describe("Knocker ID. A knocker is a pre-member of a conversation who does not exist yet").optional(), "media": z.object({}).describe("Media Object").optional(), "member_id": z.string().describe("Member ID").optional(), "member_id_inviting": z.string().describe("Member ID of the member that sends the invitation").optional(), "user_id": z.string().describe("User ID") }).describe("Create a Member in invite state ").optional() }).shape