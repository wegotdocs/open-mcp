import { z } from "zod"

export const toolName = `spaceskey_patch`
export const toolDescription = `Update Spaces Access Keys`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/spaces/keys/{access_key}`
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
  "query": [],
  "header": [],
  "path": [
    "access_key"
  ],
  "cookie": [],
  "body": [
    "name",
    "grants",
    "b_access_key",
    "created_at"
  ]
}
export const flatMap = {
  "b_access_key": "access_key"
}

export const inputParams = z.object({ "access_key": z.string().describe("The access key's ID."), "name": z.string().describe("The access key's name.").optional(), "grants": z.array(z.object({ "bucket": z.string().describe("The name of the bucket."), "permission": z.string().describe("The permission to grant to the user. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string.") })).describe("The list of permissions for the access key."), "b_access_key": z.string().describe("The Access Key ID used to access a bucket.").readonly().optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time the key was created.").readonly().optional() }).shape