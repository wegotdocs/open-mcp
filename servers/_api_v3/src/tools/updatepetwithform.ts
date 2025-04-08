import { z } from "zod"

export const toolName = `updatepetwithform`
export const toolDescription = `Updates a pet in the store with form data.`
export const baseUrl = `/api/v3`
export const path = `/pet/{petId}`
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
    "name",
    "status"
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
  "petId": z.number().int().describe("ID of pet that needs to be updated"),
  "name": z.string().describe("Name of pet that needs to be updated").optional(),
  "status": z.string().describe("Status of pet that needs to be updated").optional()
}