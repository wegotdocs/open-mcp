import { z } from "zod"

export const toolName = `create_a_file`
export const toolDescription = `Create a File`
export const baseUrl = `https://api.increase.com`
export const path = `/files`
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