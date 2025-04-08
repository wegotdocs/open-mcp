import { z } from "zod"

export const toolName = `projects_assign_resources`
export const toolDescription = `Assign Resources to a Project`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/projects/{project_id}/resources`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "project_id"
  ],
  "cookie": [],
  "body": [
    "resources"
  ]
}
export const flatMap = {}

export const inputParams = {
  "project_id": z.string().uuid().describe("A unique identifier for a project."),
  "resources": z.array(z.string().regex(new RegExp("^do:(dbaas|domain|droplet|floatingip|loadbalancer|space|volume|kubernetes|vpc):.*")).describe("The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.")).describe("A list of uniform resource names (URNs) to be added to a project.").optional()
}