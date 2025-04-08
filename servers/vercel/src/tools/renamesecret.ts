import { z } from "zod"

export const toolName = `renamesecret`
export const toolDescription = `Change secret name`
export const baseUrl = `https://api.vercel.com`
export const path = `/v2/secrets/{name}`
export const method = `patch`
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
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "name"
  ],
  "cookie": [],
  "body": [
    "b_name"
  ]
}
export const flatMap = {
  "b_name": "name"
}

export const inputParams = {
  "name": z.string().describe("The name of the secret."),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "b_name": z.string().describe("The name of the new secret.")
}