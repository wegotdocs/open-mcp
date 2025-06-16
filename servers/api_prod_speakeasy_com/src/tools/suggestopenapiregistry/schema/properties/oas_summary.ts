import { z } from "zod"

export const inputParamsSchema = {
  "info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `info` to the tool, first call the tool `expandSchema` with \"/properties/oas_summary/properties/info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "operations": z.array(z.object({ "method": z.string(), "path": z.string(), "operation_id": z.string(), "description": z.string(), "tags": z.array(z.string()), "method_name_override": z.string().optional(), "group_override": z.string().optional() }))
}