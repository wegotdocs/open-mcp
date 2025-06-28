import { z } from "zod"

export const inputParamsSchema = {
  "currency": z.string().describe("Currency code for which the history is requested."),
  "from": z.string().datetime({ offset: true }).describe("Start date-time filter in ISO format.").optional(),
  "to": z.string().datetime({ offset: true }).describe("End date-time filter in ISO format. Optional.").optional(),
  "pageable": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pageable` to the tool, first call the tool `expandSchema` with \"/properties/pageable\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Pagination parameters (page, size, sort).</property-description>")
}