import { z } from "zod"

export const toolName = `delete_project_user`
export const toolDescription = `Deletes a user from the project.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects/{project_id}/users/{user_id}`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().describe("The ID of the project."), "user_id": z.string().describe("The ID of the user.") }).optional() }).shape