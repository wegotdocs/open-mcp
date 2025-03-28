import { z } from "zod"

export const toolName = `retrievefinetuningjob`
export const toolDescription = `Get info about a fine-tuning job.

[Learn more about fine-tuning](/docs/guides/fine-tuning)`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/fine_tuning/jobs/{fine_tuning_job_id}`
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

export const inputParams = z.object({ "path": z.object({ "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job.\n") }).optional() }).shape