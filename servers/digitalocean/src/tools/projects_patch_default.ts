import { z } from "zod"

export const toolName = `projects_patch_default`
export const toolDescription = `Patch the Default Project`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/projects/default`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {}