import { z } from "zod"

export const inputParamsSchema = {
  "module_slug": z.string().regex(new RegExp("^[a-zA-Z0-9]+[-\\/][a-zA-Z][a-zA-Z0-9_]*$")).describe("Unique textual identifier (slug) of the module to deprecate"),
  "action": z.literal("deprecate").describe("Action to take on resource. 'deprecate' is currently the only valid option.").optional(),
  "params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `params` to the tool, first call the tool `expandSchema` with \"/properties/params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}