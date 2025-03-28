import { z } from "zod"

export const toolName = `createimagevariation`
export const toolDescription = `Creates a variation of a given image.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/images/variations`
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