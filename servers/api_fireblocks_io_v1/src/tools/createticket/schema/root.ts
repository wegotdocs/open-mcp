import { z } from "zod"

export const inputParamsSchema = {
  "createdByNetworkId": z.string(),
  "type": z.enum(["ASYNC","DVP"]),
  "expiresIn": z.number().gte(1).lte(48).describe("Number of hours after which an OPEN ticket will expire if no term is funded.").optional(),
  "terms": z.array(z.object({ "asset": z.string().describe("Asset name"), "amount": z.number().describe("Amount"), "fromNetworkId": z.string().describe("Identifier of the origination Network Profile"), "toNetworkId": z.string().describe("Identifier of the destination Network Profile") })).optional(),
  "externalRefId": z.string().max(64).optional(),
  "note": z.string().max(1024).optional(),
  "submit": z.boolean().optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}