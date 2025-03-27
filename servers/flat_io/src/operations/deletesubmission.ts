import { z } from "zod"

export const toolName = `deletesubmission`
export const toolDescription = `Delete a submission`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}/assignments/{assignment}/submissions/{submission}`
export const method = `delete`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "class": z.string().describe("Unique identifier of the class"), "assignment": z.string().describe("Unique identifier of the assignment"), "submission": z.string().describe("Unique identifier of the submission") }).optional() }).shape