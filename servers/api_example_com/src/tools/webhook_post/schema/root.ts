import { z } from "zod"

export const inputParamsSchema = {
  "from": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `from` to the tool, first call the tool `expandSchema` with \"/properties/from\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "to": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `to` to the tool, first call the tool `expandSchema` with \"/properties/to\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "message": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `message` to the tool, first call the tool `expandSchema` with \"/properties/message\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "reference": z.string(),
  "groupings": z.array(z.string()),
  "timeUtc": z.string(),
  "channel": z.string()
}