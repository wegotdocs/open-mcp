import { z } from "zod"

export const inputParams = {
  "app_id": z.string(),
  "revisions_ids": z.array(z.string()),
  "evaluators_configs": z.array(z.string()),
  "testset_id": z.string(),
  "rate_limit": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `rate_limit` to the tool, first call the tool `expandSchema` with \"/properties/rate_limit\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "correct_answer_column": z.union([z.string(), z.null()]).optional()
}