import { z } from "zod"

export const inputParamsSchema = {
  "time_of_generation_min": z.string().datetime({ offset: true }).describe("Minimum time of generation (ISO8601 format)"),
  "time_of_generation_max": z.string().datetime({ offset: true }).describe("Maximum time of generation (ISO8601 format)"),
  "total_units_min": z.number().int().gte(0).describe("Minimum total units (tokens)").optional(),
  "total_units_max": z.number().int().gte(0).describe("Maximum total units (tokens)").optional(),
  "cost_min": z.number().gte(0).describe("Minimum cost (in cents)").optional(),
  "cost_max": z.number().gte(0).describe("Maximum cost (in cents)").optional(),
  "prompt_token_min": z.number().int().gte(0).describe("Minimum number of prompt tokens").optional(),
  "prompt_token_max": z.number().int().gte(0).describe("Maximum number of prompt tokens").optional(),
  "completion_token_min": z.number().int().gte(0).describe("Minimum number of completion tokens").optional(),
  "completion_token_max": z.number().int().gte(0).describe("Maximum number of completion tokens").optional(),
  "status_code": z.string().describe("Comma separated response status codes").optional(),
  "weighted_feedback_min": z.number().gte(-10).lte(10).describe("Minimum weighted feedback score").optional(),
  "weighted_feedback_max": z.number().gte(-10).lte(10).describe("Maximum weighted feedback score").optional(),
  "virtual_keys": z.string().describe("Comma separated virtual key slugs").optional(),
  "configs": z.string().describe("Comma separated config slugs").optional(),
  "workspace_slug": z.string().describe("Workspace slug filter. If a workspace API key is being used, this filter will not be taken into consideration. If an organisation API key is used and no workspace slug is passed, default workspace will be used.").optional(),
  "api_key_ids": z.string().describe("Comma separated API key UUIDs").optional(),
  "metadata": z.string().describe("Stringifed json object with key value metadata pairs").optional(),
  "ai_org_model": z.string().describe("Comma separated ai provider and model combination. Double underscore (__) should be used as a separator for each provider and model combination").optional(),
  "trace_id": z.string().describe("Comma separated trace IDs").optional(),
  "span_id": z.string().describe("Comma separated span IDs").optional(),
  "prompt_slug": z.string().describe("Comma separated prompt slugs").optional()
}