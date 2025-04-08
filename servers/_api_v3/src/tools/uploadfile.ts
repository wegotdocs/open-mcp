import { z } from "zod"

export const toolName = `uploadfile`
export const toolDescription = `Uploads an image.`
export const baseUrl = `/api/v3`
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

export const inputParams = {
  "petId": z.number().int().describe("ID of pet to update"),
  "additionalMetadata": z.string().describe("Additional Metadata").optional()
}