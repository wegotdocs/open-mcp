import { z } from "zod"

export const toolName = `archive_project`
export const toolDescription = `Archives a project in the organization. Archived projects cannot be used or updated.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects/{project_id}/archive`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().describe("The ID of the project.") }).optional() }).shape