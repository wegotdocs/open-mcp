import { z } from "zod"

export const toolName = `get_bulkjobs_v4_deviceuploads_jobid_results`
export const toolDescription = `Gets bulk upload results`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/bulkjobs/v4/deviceUploads/{jobId}/results`
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

export const inputParams = z.object({ "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "limit": z.number().int().gte(1).lte(100).describe("The number of items to return per page") }).optional() }).shape