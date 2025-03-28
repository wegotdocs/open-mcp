import { z } from "zod"

export const toolName = `createimageedit`
export const toolDescription = `Creates an edited or extended image given an original image and a prompt.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/images/edits`
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