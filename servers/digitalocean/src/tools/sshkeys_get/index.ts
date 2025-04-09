export { inputParams } from "./schema/root.js"

export const toolName = `sshkeys_get`
export const toolDescription = `Retrieve an Existing SSH Key`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/account/keys/{ssh_key_identifier}`
export const method = `get`
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
    "ssh_key_identifier"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}