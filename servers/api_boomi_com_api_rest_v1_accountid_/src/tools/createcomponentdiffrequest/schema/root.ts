import { z } from "zod"

export const inputParamsSchema = {
  "CompDiffConfig": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `CompDiffConfig` to the tool, first call the tool `expandSchema` with \"/properties/CompDiffConfig\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "componentId": z.string().describe("The ID of the component for which you want to compare versions."),
  "sourceVersion": z.number().int().describe("The source version of the component."),
  "targetVersion": z.number().int().describe("The target version which you want to compare to the source version.")
}