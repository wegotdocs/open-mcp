import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.string().describe("The ID of the project."),
  "rate_limit_id": z.string().describe("The ID of the rate limit."),
  "max_requests_per_1_minute": z.number().int().describe("The maximum requests per minute.").optional(),
  "max_tokens_per_1_minute": z.number().int().describe("The maximum tokens per minute.").optional(),
  "max_images_per_1_minute": z.number().int().describe("The maximum images per minute. Only relevant for certain models.").optional(),
  "max_audio_megabytes_per_1_minute": z.number().int().describe("The maximum audio megabytes per minute. Only relevant for certain models.").optional(),
  "max_requests_per_1_day": z.number().int().describe("The maximum requests per day. Only relevant for certain models.").optional(),
  "batch_1_day_max_input_tokens": z.number().int().describe("The maximum batch input tokens per day. Only relevant for certain models.").optional()
}