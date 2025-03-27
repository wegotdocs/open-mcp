import { z } from "zod"

export const toolName = `getclustersolution`
export const toolDescription = `GET Batch Solution Endpoint`
export const baseUrl = `https://graphhopper.com/api/1`
export const path = `/cluster/solution/{jobId}`
export const method = `get`
export const security = [
  {
    "key": "key",
    "value": "<mcp-env-var>KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "KEY",
    "schemeType": "apiKey",
    "schemeName": "key"
  }
]

export const inputParams = z.object({ "path": z.object({ "jobId": z.string().describe("Request solution with jobId") }).optional() }).shape