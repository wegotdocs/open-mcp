import { z } from "zod"

export const toolName = `updatepromptpartial`
export const toolDescription = `Update a prompt partial`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/prompts/partials/{promptPartialId}`
export const method = `put`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "promptPartialId"
  ],
  "cookie": [],
  "body": [
    "name",
    "string",
    "description",
    "status"
  ]
}
export const flatMap = {}

export const inputParams = {
  "promptPartialId": z.string(),
  "name": z.string().optional(),
  "string": z.string().optional(),
  "description": z.string().optional(),
  "status": z.string().optional()
}