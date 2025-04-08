import { z } from "zod"

export const toolName = `updatepet`
export const toolDescription = `Update an existing pet.`
export const baseUrl = `https://petstore.swagger.io/v2`
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

export const inputParams = {
  "id": z.number().int().optional(),
  "name": z.string(),
  "category": z.object({ "id": z.number().int().optional(), "name": z.string().optional() }).optional(),
  "photoUrls": z.array(z.string()),
  "tags": z.array(z.object({ "id": z.number().int().optional(), "name": z.string().optional() })).optional(),
  "status": z.enum(["available","pending","sold"]).describe("pet status in the store").optional()
}