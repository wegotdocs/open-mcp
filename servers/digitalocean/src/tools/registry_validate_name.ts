import { z } from "zod"

export const toolName = `registry_validate_name`
export const toolDescription = `Validate a Container Registry Name`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/validate-name`
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
    "name"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "name": z.string().regex(new RegExp("^[a-z0-9-]{1,63}$")).max(63).describe("A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters.") }).shape