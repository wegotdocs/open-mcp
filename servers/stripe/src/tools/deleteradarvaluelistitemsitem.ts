import { z } from "zod"

export const toolName = `deleteradarvaluelistitemsitem`
export const toolDescription = `Delete a value list item`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/radar/value_list_items/{item}`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "item"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "item": z.string().max(5000)
}