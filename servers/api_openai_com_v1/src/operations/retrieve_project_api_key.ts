import { z } from "zod"

export const toolName = `retrieve_project_api_key`
export const toolDescription = `Retrieves an API key in the project.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects/{project_id}/api_keys/{key_id}`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().describe("The ID of the project."), "key_id": z.string().describe("The ID of the API key.") }).optional() }).shape