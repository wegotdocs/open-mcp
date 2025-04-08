import { z } from "zod"

export const toolName = `sshkeys_create`
export const toolDescription = `Create a New SSH Key`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/account/keys`
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
    "id",
    "fingerprint",
    "public_key",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "id": z.number().int().describe("A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.").readonly().optional(),
  "fingerprint": z.string().describe("A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.").readonly().optional(),
  "public_key": z.string().describe("The entire public key string that was uploaded. Embedded into the root user's `authorized_keys` file if you include this key during Droplet creation."),
  "name": z.string().describe("A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.")
}