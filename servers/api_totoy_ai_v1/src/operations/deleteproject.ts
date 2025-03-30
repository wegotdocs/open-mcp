import { z } from "zod"

export const toolName = `deleteproject`
export const toolDescription = `Deletes a Project and all its associated resources.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/projects/{project_id}`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Project` created in Totoy.") }).optional() }).shape