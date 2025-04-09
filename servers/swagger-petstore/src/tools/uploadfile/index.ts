export { inputParams } from "./schema/root.js"

export const toolName = `uploadfile`
export const toolDescription = `Uploads an image.`
export const baseUrl = `https://petstore3.swagger.io/api/v3`
export const path = `/pet/{petId}/uploadImage`
export const method = `post`
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
    "additionalMetadata"
  ],
  "header": [],
  "path": [
    "petId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}