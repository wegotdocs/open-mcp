import { z } from "zod"

export const toolName = `get_messages_send`
export const toolDescription = `Send message by simple GET or POST`
export const baseUrl = `https://api.bulksms.com/v1`
export const path = `/messages/send`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "query": z.object({ "to": z.string().describe("The phone number of the recipient."), "body": z.string().describe("The text you want to send."), "deduplication-id": z.number().int().describe("Refer to the `deduplication-id` parameter.").optional() }).optional() }).shape