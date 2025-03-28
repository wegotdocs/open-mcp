import { z } from "zod"

export const toolName = `cancelbatch`
export const toolDescription = `Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/batches/{batch_id}/cancel`
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

export const inputParams = z.object({ "path": z.object({ "batch_id": z.string().describe("The ID of the batch to cancel.") }).optional() }).shape