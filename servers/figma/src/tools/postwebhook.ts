import { z } from "zod"

export const toolName = `postwebhook`
export const toolDescription = `Create a webhook`
export const baseUrl = `https://api.figma.com`
export const path = `/v2/webhooks`
export const method = `post`
export const security = [
  {
    "key": "X-Figma-Token",
    "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "X_FIGMA_TOKEN",
    "schemeType": "apiKey",
    "schemeName": "X-Figma-Token"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "event_type",
    "team_id",
    "endpoint",
    "passcode",
    "status",
    "description"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "event_type": z.enum(["PING","FILE_UPDATE","FILE_VERSION_UPDATE","FILE_DELETE","LIBRARY_PUBLISH","FILE_COMMENT"]).describe("An enum representing the possible events that a webhook can subscribe to"), "team_id": z.string().describe("Team id to receive updates about"), "endpoint": z.string().describe("The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters."), "passcode": z.string().describe("String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters."), "status": z.enum(["ACTIVE","PAUSED"]).describe("State of the webhook, including any error state it may be in").optional(), "description": z.string().describe("User provided description or name for the webhook. Max length 150 characters.").optional() }).shape