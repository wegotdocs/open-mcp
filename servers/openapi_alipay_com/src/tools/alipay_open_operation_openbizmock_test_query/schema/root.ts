import { z } from "zod"

export const inputParams = {
  "fuza": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `fuza` to the tool, first call the tool `expandSchema` with \"/properties/fuza\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "out_open_id": z.string().describe("哈哈").optional(),
  "u_test": z.string().describe("哈哈").optional()
}