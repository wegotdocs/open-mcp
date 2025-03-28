import { z } from "zod"

export const toolName = `createtranslation`
export const toolDescription = `Translates audio into English.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/audio/translations`
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