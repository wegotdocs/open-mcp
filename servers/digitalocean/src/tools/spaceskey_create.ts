import { z } from "zod"

export const toolName = `spaceskey_create`
export const toolDescription = `Create a New Spaces Access Key`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/spaces/keys`
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
    "name",
    "grants",
    "access_key",
    "created_at"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().describe("The access key's name.").optional(), "grants": z.array(z.object({ "bucket": z.string().describe("The name of the bucket."), "permission": z.string().describe("The permission to grant to the user. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string.") })).describe("The list of permissions for the access key."), "access_key": z.string().describe("The Access Key ID used to access a bucket.").readonly().optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time the key was created.").readonly().optional() }).shape