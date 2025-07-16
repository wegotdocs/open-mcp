import { z } from "zod"

export const inputParamsSchema = {
  "sceneName": z.string().describe("场景名称"),
  "parameters": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `parameters` to the tool, first call the tool `expandSchema` with \"/properties/parameters\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>场景参数</property-description>").optional()
}