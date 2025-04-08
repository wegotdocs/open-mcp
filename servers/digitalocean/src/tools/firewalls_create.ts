import { z } from "zod"

export const toolName = `firewalls_create`
export const toolDescription = `Create a New Firewall`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/firewalls`
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
  "body": []
}
export const flatMap = {}

export const inputParams = {}