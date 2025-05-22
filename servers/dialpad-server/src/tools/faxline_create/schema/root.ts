import { z } from "zod"

export const inputParamsSchema = {
  "line": z.object({ "number": z.string().nullable().describe("A phone number to assign. (e164-formatted)"), "type": z.string().nullable().describe("Type of line.") }).nullable().describe("Line to assign."),
  "target": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `target` to the tool, first call the tool `expandSchema` with \"/properties/target\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The target to assign the number to.</property-description>")
}