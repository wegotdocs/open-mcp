import { z } from "zod"

export const toolName = `delete_plants_id_`
export const toolDescription = `Deletes a single plant based on the ID supplied`
export const baseUrl = `http://sandbox.mintlify.com`
export const path = `/plants/{id}`
export const method = `delete`
export const security = [
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
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "id": z.number().int().describe("ID of plant to delete")
}