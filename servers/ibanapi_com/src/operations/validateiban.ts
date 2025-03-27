import { z } from "zod"

export const toolName = `validateiban`
export const toolDescription = `Validate IBAN`
export const baseUrl = `https://api.ibanapi.com/v1`
export const path = `/validate`
export const method = `get`
export const security = [
  {
    "key": "api_key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api_key"
  }
]

export const inputParams = z.object({ "query": z.object({ "iban": z.string().describe("The IBAN") }).optional() }).shape