import { z } from "zod"

export const toolName = `get_messages`
export const toolDescription = `Retrieve Messages`
export const baseUrl = `https://api.bulksms.com/v1`
export const path = `/messages`
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

export const inputParams = z.object({ "query": z.object({ "limit": z.number().describe("The maximum number of messages that are returned.  The default is 1000.\nThe value of `limit` is not a guarantee that a specific number of messages will be in the response, even if there are more messages available.  Consider the case where you have 150 messages and you specify `limit=50`.  It is possible that only 49 messages will be returned.  The  way to make sure that there are no more messages is to submit a new call using the `id` filter field with the `<` operator (described below).").optional(), "filter": z.string().describe("See the message filtering for more information.").optional(), "sortOrder": z.literal("ASCENDING").describe("The default value is DESCENDING\n\nIf the `sortOrder` is DESCENDING, the newest messages be first in the result.  ASCENDING places the oldest messages on top of the response.\n").optional() }).optional() }).shape