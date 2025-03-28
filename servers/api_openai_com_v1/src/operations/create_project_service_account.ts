import { z } from "zod"

export const toolName = `create_project_service_account`
export const toolDescription = `Creates a new service account in the project. This also returns an unredacted API key for the service account.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects/{project_id}/service_accounts`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().describe("The ID of the project.") }).optional(), "body": z.object({ "name": z.string().describe("The name of the service account being created.") }).optional() }).shape