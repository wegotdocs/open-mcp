import { z } from "zod"

export const toolName = `createsecret`
export const toolDescription = `Create a new secret`
export const baseUrl = `https://api.vercel.com`
export const path = `/v2/secrets/{name}`
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
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "name",
    "value",
    "decryptable"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "name": z.string().describe("The name of the secret (max 100 characters)."), "value": z.string().describe("The value of the new secret."), "decryptable": z.boolean().describe("Whether the secret value can be decrypted after it has been created.").optional() }).shape