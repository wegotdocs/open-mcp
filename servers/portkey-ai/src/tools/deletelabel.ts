import { z } from "zod"

export const toolName = `deletelabel`
export const toolDescription = `Delete a label`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/labels/{labelId}`
export const method = `delete`
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
    "labelId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "labelId": z.string().uuid().describe("ID of the label to delete")
}