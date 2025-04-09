export { inputParams } from "./schema/root.js"

export const toolName = `deletepet`
export const toolDescription = `Deletes a pet.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/pet/{petId}`
export const method = `delete`
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
  "header": [
    "api_key"
  ],
  "path": [
    "petId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}