import { z } from "zod"

export const toolName = `delete_project_service_account`
export const toolDescription = `Deletes a service account from the project.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects/{project_id}/service_accounts/{service_account_id}`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().describe("The ID of the project."), "service_account_id": z.string().describe("The ID of the service account.") }).optional() }).shape