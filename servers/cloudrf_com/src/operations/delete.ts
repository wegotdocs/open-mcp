import { z } from "zod"

export const toolName = `delete`
export const toolDescription = `Delete a calculation from the database.`
export const baseUrl = `https://api.cloudrf.com`
export const path = `/archive/delete`
export const method = `get`
export const security = [
  {
    "key": "key",
    "value": "<mcp-env-var>KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "KEY",
    "schemeType": "apiKey",
    "schemeName": "key"
  }
]

export const inputParams = z.object({ "query": z.object({ "cid": z.number().int().describe("Unique calculation ID number") }).optional() }).shape