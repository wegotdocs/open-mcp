export { inputParams } from "./schema/root.js"

export const toolName = `updatepet`
export const toolDescription = `Update an existing pet.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/pet`
export const method = `put`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "name",
    "category",
    "photoUrls",
    "tags",
    "status"
  ]
}
export const flatMap = {}