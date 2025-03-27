import { z } from "zod"

export const toolName = `recordconversation`
export const toolDescription = `Record a conversation`
export const baseUrl = `https://api.nexmo.com/v0.1`
export const path = `/conversations/{conversation_id}/record`
export const method = `put`
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

export const inputParams = z.object({ "body": z.object({ "action": z.enum(["start","stop"]).describe("Recording Action"), "event_method": z.string().describe("The HTTP method used to send event information to event_url."), "event_url": z.array(z.string()).describe("The webhook endpoint where recording progress events are sent to.").optional(), "format": z.enum(["mp3","wav"]).describe("Record the Conversation in a specific format."), "split": z.string().describe("Record the sent and received audio in separate channels of a stereo recording") }).optional() }).shape