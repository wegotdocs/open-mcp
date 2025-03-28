import { z } from "zod"

export const toolName = `create_project`
export const toolDescription = `Create a new project in the organization. Projects can be created and archived, but cannot be deleted.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects`
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

export const inputParams = z.object({ "body": z.object({ "name": z.string().describe("The friendly name of the project, this name appears in reports.") }).optional() }).shape