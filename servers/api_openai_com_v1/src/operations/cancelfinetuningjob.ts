import { z } from "zod"

export const toolName = `cancelfinetuningjob`
export const toolDescription = `Immediately cancel a fine-tune job.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/fine_tuning/jobs/{fine_tuning_job_id}/cancel`
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

export const inputParams = z.object({ "path": z.object({ "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job to cancel.\n") }).optional() }).shape