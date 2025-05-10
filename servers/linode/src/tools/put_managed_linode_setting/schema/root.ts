import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("__Read-only__ The ID of the Linode these Settings are for.").readonly().optional(),
  "label": z.string().describe("__Read-only__ The label of the Linode these Settings are for.").readonly().optional(),
  "ssh": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ssh` to the tool, first call the tool `expandSchema` with \"/properties/ssh\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The SSH settings for this Linode.</property-description>").optional()
}