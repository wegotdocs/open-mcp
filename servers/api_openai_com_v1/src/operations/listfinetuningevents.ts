import { z } from "zod"

export const toolName = `listfinetuningevents`
export const toolDescription = `Get status updates for a fine-tuning job.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/fine_tuning/jobs/{fine_tuning_job_id}/events`
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

export const inputParams = z.object({ "path": z.object({ "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job to get events for.\n") }).optional(), "query": z.object({ "after": z.string().describe("Identifier for the last event from the previous pagination request.").optional(), "limit": z.number().int().describe("Number of events to retrieve.") }).optional() }).shape