import { z } from "zod"

export const toolName = `retrievebatch`
export const toolDescription = `Retrieves a batch.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/batches/{batch_id}`
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

export const inputParams = z.object({ "path": z.object({ "batch_id": z.string().describe("The ID of the batch to retrieve.") }).optional() }).shape