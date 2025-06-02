import { z } from "zod"

export const inputParamsSchema = {
  "configName": z.string(),
  "preScreening": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `preScreening` to the tool, first call the tool `expandSchema` with \"/properties/preScreening\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "configOperations": z.array(z.object({ "type": z.literal("CONVERSION"), "params": z.object({ "amount": z.string().optional(), "accountId": z.string().optional(), "srcAssetId": z.string().optional(), "destAssetId": z.string(), "slippageBasisPoints": z.number().int().gte(0).lte(10000).optional() }) })),
  "externalCorrelationData": z.record(z.string()).optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}