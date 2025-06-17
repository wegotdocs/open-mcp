import { z } from "zod"

export const inputParamsSchema = {
  "hash": z.string().optional(),
  "host": z.string().describe("The host name"),
  "port": z.number().int().gte(1).lte(65535).describe("The port value").optional(),
  "encryption": z.enum(["none","tls","ssl"]).describe("The encryption value").optional(),
  "auth": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `auth` to the tool, first call the tool `expandSchema` with \"/properties/auth\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}