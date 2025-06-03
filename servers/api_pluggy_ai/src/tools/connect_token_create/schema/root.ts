import { z } from "zod"

export const inputParamsSchema = {
  "itemId": z.string().uuid().describe("Item identifier to allow Connect Widget to performan an update on it.").optional(),
  "options": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `options` to the tool, first call the tool `expandSchema` with \"/properties/options\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Item options available to send through connect tokens</property-description>").optional()
}