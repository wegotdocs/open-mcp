import { z } from "zod"

export const toolName = `registry_get_dockercredentials`
export const toolDescription = `Get Docker Credentials for Container Registry`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/docker-credentials`
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
  "query": [
    "expiry_seconds",
    "read_write"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "expiry_seconds": z.number().int().gte(0).describe("The duration in seconds that the returned registry credentials will be valid. If not set or 0, the credentials will not expire."), "read_write": z.boolean().describe("By default, the registry credentials allow for read-only access. Set this query parameter to `true` to obtain read-write credentials.") }).shape