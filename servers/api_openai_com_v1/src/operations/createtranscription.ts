import { z } from "zod"

export const toolName = `createtranscription`
export const toolDescription = `Transcribes audio into the input language.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/audio/transcriptions`
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