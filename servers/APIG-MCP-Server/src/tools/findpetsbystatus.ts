import { z } from "zod"

export const toolName = `findpetsbystatus`
export const toolDescription = `Finds Pets by status.`
export const baseUrl = `https://petstore.swagger.io/v2`
export const path = `/pet/findByStatus`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [
    "status"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "status": z.enum(["available","pending","sold"]).describe("Status values that need to be considered for filter").optional()
}