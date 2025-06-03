import { z } from "zod"

export const inputParamsSchema = {
  "transaction_id": z.string().describe("Transaction ID"),
  "requestDto": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `requestDto` to the tool, first call the tool `expandSchema` with \"/properties/requestDto\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Suggestion filters</property-description>")
}