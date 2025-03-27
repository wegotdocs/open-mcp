import { z } from "zod"

export const toolName = `listbatchcompliancejobs`
export const toolDescription = `List Compliance Jobs`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/compliance/jobs`
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

export const inputParams = z.object({ "query": z.object({ "type": z.enum(["tweets","users"]).describe("Type of Compliance Job to list."), "status": z.enum(["created","in_progress","failed","complete"]).describe("Status of Compliance Job to list.").optional(), "compliance_job.fields": z.array(z.enum(["created_at","download_expires_at","download_url","id","name","resumable","status","type","upload_expires_at","upload_url"])).min(1).describe("The fields available for a ComplianceJob object.").optional() }).optional() }).shape