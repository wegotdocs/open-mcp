import { z } from "zod"

export const toolName = `modify_project`
export const toolDescription = `Modifies a project in the organization.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects/{project_id}`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().describe("The ID of the project.") }).optional(), "body": z.object({ "name": z.string().describe("The updated name of the project, this name appears in reports.") }).optional() }).shape