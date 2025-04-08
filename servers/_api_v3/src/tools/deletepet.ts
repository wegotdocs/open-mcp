import { z } from "zod"

export const toolName = `deletepet`
export const toolDescription = `Deletes a pet.`
export const baseUrl = `/api/v3`
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

export const inputParams = {
  "petId": z.number().int().describe("Pet id to delete"),
  "api_key": z.string().optional()
}