import { z } from "zod"

export const inputParamsSchema = {
  "variant_ref": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `variant_ref` to the tool, first call the tool `expandSchema` with \"/properties/variant_ref\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "environment_ref": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `environment_ref` to the tool, first call the tool `expandSchema` with \"/properties/environment_ref\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "application_ref": z.union([z.object({ "slug": z.union([z.string(), z.null()]).optional(), "version": z.union([z.number().int(), z.null()]).optional(), "commit_message": z.union([z.string(), z.null()]).optional(), "id": z.union([z.string().uuid(), z.null()]) }), z.null()]).optional()
}