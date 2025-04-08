import { z } from "zod"

export const toolName = `projects_delete`
export const toolDescription = `Delete an Existing Project`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/projects/{project_id}`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "project_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string().uuid().describe("A unique identifier for a project.")
}