import { z } from "zod"

export const toolName = `patch_bulkjobs_v4_deviceuploads_jobid_`
export const toolDescription = `Updates bulk upload job status`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/bulkjobs/v4/deviceUploads/{jobId}`
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

export const inputParams = z.object({ "body": z.object({ "action": z.enum(["cancel","acknowledge"]) }).strict().optional() }).shape