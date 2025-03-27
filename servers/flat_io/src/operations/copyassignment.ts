import { z } from "zod"

export const toolName = `copyassignment`
export const toolDescription = `Copy an assignment`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/classes/{class}/assignments/{assignment}/copy`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "assignment": z.string().describe("An optional destination assignment where the original assignement will be copied. Must be a draft.").optional(), "classroom": z.string().describe("The destination classroom where the assignment will be copied").optional(), "scheduledDate": z.string().datetime({ offset: true }).describe("The publication (scheduled) date of the assignment.\nIf this one is specified, the assignment will only be listed to the teachers of the class.\nAlternatively the existing `scheduledDate` from the copied assignment will be used.\n").optional() }).describe("Assignment copy operation").optional() }).shape