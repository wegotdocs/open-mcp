import { z } from "zod"

export const toolName = `get_messages_id_relatedreceivedmessages`
export const toolDescription = `List Related Messages`
export const baseUrl = `https://api.bulksms.com/v1`
export const path = `/messages/{id}/relatedReceivedMessages`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("The `id` of the sent message") }).optional() }).shape