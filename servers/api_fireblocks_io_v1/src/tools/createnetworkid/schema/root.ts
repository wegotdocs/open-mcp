import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Network ID Name"),
  "routingPolicy": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `routingPolicy` to the tool, first call the tool `expandSchema` with \"/properties/routingPolicy\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}