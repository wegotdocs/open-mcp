import { z } from "zod"

export const toolName = `getinventory`
export const toolDescription = `Returns pet inventories by status.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/store/inventory`
export const method = `get`
export const security = [
  {
    "key": "api_key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api_key"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {}