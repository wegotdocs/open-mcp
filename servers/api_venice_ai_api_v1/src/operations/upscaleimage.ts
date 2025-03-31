import { z } from "zod"

export const toolName = `upscaleimage`
export const toolDescription = `/api/v1/image/upscale`
export const baseUrl = `https://api.venice.ai/api/v1`
export const path = `/image/upscale`
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