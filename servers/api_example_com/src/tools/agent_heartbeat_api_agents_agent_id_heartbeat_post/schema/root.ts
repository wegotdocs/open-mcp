import { z } from "zod"

export const inputParamsSchema = {
  "agent_id": z.string(),
  "status": z.string(),
  "current_tasks": z.array(z.string()).optional(),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "health_snapshot": z.union([z.record(z.any()), z.null()]).optional()
}