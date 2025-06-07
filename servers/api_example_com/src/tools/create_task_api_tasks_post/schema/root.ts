import { z } from "zod"

export const inputParamsSchema = {
  "task_type": z.enum(["environment_create","environment_delete","environment_update","image_update","kubectl_command","git_operation","health_check","release_update","custom"]).describe("Types of tasks agents can execute"),
  "environment": z.union([z.string(), z.null()]).optional(),
  "parameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `parameters` to the tool, first call the tool `expandSchema` with \"/properties/parameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "assigned_agent_id": z.union([z.string(), z.null()]).optional()
}