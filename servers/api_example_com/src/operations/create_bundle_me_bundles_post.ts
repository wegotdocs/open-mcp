import { z } from "zod"

export const toolName = `create_bundle_me_bundles_post`
export const toolDescription = `Create Bundle`
export const baseUrl = `https://api.example.com`
export const path = `/me/bundles`
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

export const inputParams = z.object({}).shape