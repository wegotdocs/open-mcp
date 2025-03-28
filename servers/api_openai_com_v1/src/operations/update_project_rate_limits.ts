import { z } from "zod"

export const toolName = `update_project_rate_limits`
export const toolDescription = `Updates a project rate limit.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects/{project_id}/rate_limits/{rate_limit_id}`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().describe("The ID of the project."), "rate_limit_id": z.string().describe("The ID of the rate limit.") }).optional(), "body": z.object({ "max_requests_per_1_minute": z.number().int().describe("The maximum requests per minute.").optional(), "max_tokens_per_1_minute": z.number().int().describe("The maximum tokens per minute.").optional(), "max_images_per_1_minute": z.number().int().describe("The maximum images per minute. Only relevant for certain models.").optional(), "max_audio_megabytes_per_1_minute": z.number().int().describe("The maximum audio megabytes per minute. Only relevant for certain models.").optional(), "max_requests_per_1_day": z.number().int().describe("The maximum requests per day. Only relevant for certain models.").optional(), "batch_1_day_max_input_tokens": z.number().int().describe("The maximum batch input tokens per day. Only relevant for certain models.").optional() }).optional() }).shape