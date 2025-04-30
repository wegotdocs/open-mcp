import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("The ID of the tenant."),
  "autoAccept": z.union([z.null(), z.boolean()]).optional(),
  "callback": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `callback` to the tool, first call the tool `expandSchema` with \"/properties/callback\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "expires": z.union([z.null(), z.number().int()]).optional(),
  "rawRequest": z.null().optional(),
  "revocable": z.boolean(),
  "templateRequest": z.null().optional()
}