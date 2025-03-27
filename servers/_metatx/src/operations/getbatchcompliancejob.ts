import { z } from "zod"

export const toolName = `getbatchcompliancejob`
export const toolDescription = `Get Compliance Job`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/compliance/jobs/{id}`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Compliance Job ID.") }).optional(), "query": z.object({ "compliance_job.fields": z.array(z.enum(["created_at","download_expires_at","download_url","id","name","resumable","status","type","upload_expires_at","upload_url"])).min(1).describe("The fields available for a ComplianceJob object.").optional() }).optional() }).shape