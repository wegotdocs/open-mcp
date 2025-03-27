import { z } from "zod"

export const toolName = `get_create_items_model`
export const toolDescription = `Get create item model`
export const baseUrl = `https://api.codat.io`
export const path = `/companies/{companyId}/connections/{connectionId}/options/items`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({}).shape