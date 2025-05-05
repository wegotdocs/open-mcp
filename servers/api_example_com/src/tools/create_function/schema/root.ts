import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(128).describe("Name of the function, should be unique in an organisation"),
  "mode": z.enum(["Enabled","Disabled","DryRun"]).optional(),
  "definition": z.string().max(1048576).describe("Code of the function"),
  "description": z.string().max(1048576).optional(),
  "config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `config` to the tool, first call the tool `expandSchema` with \"/properties/config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "types": z.array(z.enum(["api","notification","action:case","action:alert","feeder:alert"])).optional()
}