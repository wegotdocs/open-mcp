import { z } from "zod"

export const toolName = `modifyproject`
export const toolDescription = `Modifies a Project.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/projects/{project_id}`
export const method = `patch`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Project` created in Totoy.") }).optional(), "body": z.object({ "name": z.string().max(256).describe("The name of the `Project`.").optional() }).strict().describe("Request body for modifying a `Project`.").optional() }).shape