import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Request / response identifier, prodvided from your side, will be mirrored from request to `id` in response. Example \"id\":\"123\""),
  "method": z.string().describe("Should be exact `SerpstatDomainProcedure.getAllRegionsTraffic`"),
  "params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `params` to the tool, first call the tool `expandSchema` with \"/properties/params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}