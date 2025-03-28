import { z } from "zod"

export const toolName = `deleteresponse`
export const toolDescription = `Deletes a model response with the given ID.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/responses/{response_id}`
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

export const inputParams = z.object({ "path": z.object({ "response_id": z.string().describe("The ID of the response to delete.") }).optional() }).shape