import { z } from "zod"

export const toolName = `updateprompt`
export const toolDescription = `Update a prompt`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/prompts/{promptId}`
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
    "promptId"
  ],
  "cookie": [],
  "body": [
    "name",
    "collection_id",
    "string",
    "parameters",
    "model",
    "virtual_key",
    "version_description",
    "functions",
    "tools",
    "tool_choice",
    "is_raw_template",
    "prompt_metadata"
  ]
}
export const flatMap = {}

export const inputParams = {
  "promptId": z.string(),
  "name": z.string().optional(),
  "collection_id": z.string().optional(),
  "string": z.string().optional(),
  "parameters": z.record(z.any()).optional(),
  "model": z.string().optional(),
  "virtual_key": z.string().optional(),
  "version_description": z.string().optional(),
  "functions": z.array(z.record(z.any())).optional(),
  "tools": z.array(z.record(z.any())).optional(),
  "tool_choice": z.record(z.any()).optional(),
  "is_raw_template": z.union([z.literal(0), z.literal(1)]).optional(),
  "prompt_metadata": z.record(z.any()).optional()
}