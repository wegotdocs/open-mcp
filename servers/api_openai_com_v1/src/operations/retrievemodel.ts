import { z } from "zod"

export const toolName = `retrievemodel`
export const toolDescription = `Retrieves a model instance, providing basic information about the model such as the owner and permissioning.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/models/{model}`
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

export const inputParams = z.object({ "path": z.object({ "model": z.string().describe("The ID of the model to use for this request") }).optional() }).shape