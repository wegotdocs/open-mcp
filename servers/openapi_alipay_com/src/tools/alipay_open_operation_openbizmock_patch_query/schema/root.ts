import { z } from "zod"

export const inputParams = {
  "b_query": z.string().describe("test2222").optional(),
  "c_body": z.string().describe("test").optional(),
  "complex_a": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `complex_a` to the tool, first call the tool `expandSchema` with \"/properties/complex_a\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "complex_b": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `complex_b` to the tool, first call the tool `expandSchema` with \"/properties/complex_b\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "complex_c": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `complex_c` to the tool, first call the tool `expandSchema` with \"/properties/complex_c\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "complex_d": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `complex_d` to the tool, first call the tool `expandSchema` with \"/properties/complex_d\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "id_type_modify_open_id": z.string().describe("1").optional(),
  "id_typea": z.string().describe("id_type").optional(),
  "price": z.string().describe("元").optional(),
  "uida": z.string().describe("1").optional()
}