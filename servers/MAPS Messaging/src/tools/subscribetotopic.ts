import { z } from "zod"

export const toolName = `subscribetotopic`
export const toolDescription = `Subscribe to a topic`
export const baseUrl = `https://api.example.com`
export const path = `/api/v1/messaging/subscribe`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
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
  "path": [],
  "cookie": [],
  "body": [
    "destinationName",
    "namedSubscription",
    "filter",
    "maxDepth",
    "transactional",
    "retainMessage"
  ]
}
export const flatMap = {}

export const inputParams = {
  "destinationName": z.string().describe("The name of the destination (e.g., topic or queue) to which the subscription is bound.Supports MQTT style wild card subscription"),
  "namedSubscription": z.string().nullable().describe("An optional name for a named subscription, allowing clients to re-use existing subscriptions if provided.").optional(),
  "filter": z.string().nullable().describe("An optional filter expression written in JMS selector syntax to filter messages received by the subscription.").optional(),
  "maxDepth": z.number().int().nullable().describe("The maximum number of messages that can be queued for the subscription before new messages are dropped.").optional(),
  "transactional": z.boolean().describe("Flag to indicate the subscription is transactional").optional(),
  "retainMessage": z.boolean().nullable().describe("Indicates if messages should be retained on the destination for this subscription, meaning they will be stored and made available to future subscribers.").optional()
}