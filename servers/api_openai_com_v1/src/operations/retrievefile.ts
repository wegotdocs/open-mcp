import { z } from "zod"

export const toolName = `retrievefile`
export const toolDescription = `Returns information about a specific file.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/files/{file_id}`
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

export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The ID of the file to use for this request.") }).optional() }).shape