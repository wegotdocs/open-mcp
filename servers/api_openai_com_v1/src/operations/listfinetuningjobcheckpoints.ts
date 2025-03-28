import { z } from "zod"

export const toolName = `listfinetuningjobcheckpoints`
export const toolDescription = `List checkpoints for a fine-tuning job.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/fine_tuning/jobs/{fine_tuning_job_id}/checkpoints`
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

export const inputParams = z.object({ "path": z.object({ "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job to get checkpoints for.\n") }).optional(), "query": z.object({ "after": z.string().describe("Identifier for the last checkpoint ID from the previous pagination request.").optional(), "limit": z.number().int().describe("Number of checkpoints to retrieve.") }).optional() }).shape