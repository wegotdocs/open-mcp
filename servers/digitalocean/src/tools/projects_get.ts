import { z } from "zod"

export const toolName = `projects_get`
export const toolDescription = `Retrieve an Existing Project`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/projects/{project_id}`
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

export const inputParams = z.object({ "project_id": z.string().uuid().describe("A unique identifier for a project.") }).shape