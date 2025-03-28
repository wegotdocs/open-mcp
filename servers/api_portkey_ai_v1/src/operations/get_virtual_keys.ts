import { z } from "zod"

export const toolName = `get_virtual_keys`
export const toolDescription = `List All Virtual Keys`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/virtual-keys`
export const method = `get`
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

export const inputParams = z.object({}).shape