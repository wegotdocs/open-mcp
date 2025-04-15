import { z } from "zod"

export const inputParams = {
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "scope": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `scope` to the tool, first call the tool `expandSchema` with \"/properties/scope\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}