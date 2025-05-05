import { z } from "zod"

export const inputParamsSchema = {
  "dryRun": z.boolean().optional(),
  "name": z.string().min(1).max(128).describe("Name of the function").optional(),
  "definition": z.string().max(1048576).describe("Code of the function"),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "input": z.any().optional()
}