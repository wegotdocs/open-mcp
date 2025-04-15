import { z } from "zod"

export const inputParamsSchema = {
  "inputs": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `inputs` to the tool, first call the tool `expandSchema` with \"/properties/inputs\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "mapping": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mapping` to the tool, first call the tool `expandSchema` with \"/properties/mapping\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}