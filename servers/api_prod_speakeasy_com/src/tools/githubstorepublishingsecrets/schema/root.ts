import { z } from "zod"

export const inputParamsSchema = {
  "generate_gen_lock_id": z.string().describe("The generation lock ID"),
  "secrets": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `secrets` to the tool, first call the tool `expandSchema` with \"/properties/secrets\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A map of secrets to store in the GitHub target</property-description>").optional()
}