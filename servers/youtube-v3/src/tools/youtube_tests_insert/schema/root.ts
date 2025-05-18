import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()),
  "externalChannelId": z.string().optional(),
  "featuredPart": z.boolean().optional(),
  "gaia": z.string().optional(),
  "id": z.string().optional(),
  "snippet": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `snippet` to the tool, first call the tool `expandSchema` with \"/properties/snippet\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}