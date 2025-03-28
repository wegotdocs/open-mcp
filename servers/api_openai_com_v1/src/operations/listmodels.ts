import { z } from "zod"

export const toolName = `listmodels`
export const toolDescription = `Lists the currently available models, and provides basic information about each one such as the owner and availability.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/models`
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

export const inputParams = z.object({}).shape