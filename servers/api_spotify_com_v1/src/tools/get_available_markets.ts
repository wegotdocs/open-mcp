import { z } from "zod"

export const toolName = `get_available_markets`
export const toolDescription = `Get Available Markets`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/markets`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}

export const inputParams = z.object({}).shape