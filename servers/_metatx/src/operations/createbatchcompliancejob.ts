import { z } from "zod"

export const toolName = `createbatchcompliancejob`
export const toolDescription = `Create compliance job`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/compliance/jobs`
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

export const inputParams = z.object({ "body": z.object({ "name": z.string().max(64).describe("User-provided name for a compliance job.").optional(), "resumable": z.boolean().describe("If true, this endpoint will return a pre-signed URL with resumable uploads enabled.").optional(), "type": z.enum(["tweets","users"]).describe("Type of compliance job to list.") }).describe("A request to create a new batch compliance job.").optional() }).shape