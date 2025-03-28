import { z } from "zod"

export const toolName = `deletemodel`
export const toolDescription = `Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/models/{model}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "model": z.string().describe("The model to delete") }).optional() }).shape