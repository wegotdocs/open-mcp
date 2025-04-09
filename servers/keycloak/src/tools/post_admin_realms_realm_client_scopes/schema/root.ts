import { z } from "zod"

export const inputParams = {
  "id": z.string().optional(),
  "name": z.string().optional(),
  "description": z.string().optional(),
  "protocol": z.string().optional(),
  "attributes": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attributes` to the tool, first call the tool `expandSchema` with \"/properties/attributes\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "protocolMappers": z.array(z.object({ "id": z.string().optional(), "name": z.string().optional(), "protocol": z.string().optional(), "protocolMapper": z.string().optional(), "config": z.record(z.string()).optional() })).optional()
}