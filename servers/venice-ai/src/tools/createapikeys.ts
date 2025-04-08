import { z } from "zod"

export const toolName = `createapikeys`
export const toolDescription = `/api/v1/api_keys`
export const baseUrl = `https://api.venice.ai/api/v1`
export const path = `/api_keys`
export const method = `post`
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
  "path": [],
  "cookie": [],
  "body": [
    "description",
    "apiKeyType",
    "expiresAt",
    "consumptionLimit"
  ]
}
export const flatMap = {}

export const inputParams = {
  "description": z.string().describe("The API Key description"),
  "apiKeyType": z.enum(["ADMIN","INFERENCE"]).describe("The API Key type. Admin keys have full access to the API while inference keys are only able to call inference endpoints."),
  "expiresAt": z.union([z.literal(""), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{3})?Z$"))]).describe("The API Key expiration date. If not provided, the key will not expire.").optional(),
  "consumptionLimit": z.object({ "vcu": z.union([z.number().gte(0), z.any().nullable(), z.any().nullable()]).describe("VCU limit"), "usd": z.union([z.number().gte(0), z.any().nullable(), z.any().nullable()]).describe("USD limit") }).describe("The API Key consumption limits for each epoch.")
}