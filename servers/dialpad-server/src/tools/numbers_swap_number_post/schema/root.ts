import { z } from "zod"

export const inputParamsSchema = {
  "swap_details": z.object({ "area_code": z.string().nullable().describe("An area code in which to find an available phone number for assignment.").optional(), "type": z.string().nullable().describe("Type of swap.") }).nullable().describe("Type of number swap (area_code, auto, provided_number).").optional(),
  "target": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `target` to the tool, first call the tool `expandSchema` with \"/properties/target\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The target for swap number.</property-description>")
}