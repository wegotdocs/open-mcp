import { z } from "zod"

export const toolName = `deletewebhook`
export const toolDescription = `Delete a webhook`
export const baseUrl = `https://api.figma.com`
export const path = `/v2/webhooks/{webhook_id}`
export const method = `delete`
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
  "path": [
    "webhook_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "webhook_id": z.string().describe("ID of webhook to delete")
}