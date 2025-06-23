import { z } from "zod"

export const inputParamsSchema = {
  "auth": z.object({ "type": z.string(), "key": z.string().describe("The API key") }).describe("API key authentication"),
  "client": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `client` to the tool, first call the tool `expandSchema` with \"/properties/client\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}