import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.string(),
  "asset": z.string().describe("Asset name"),
  "amount": z.number().describe("Amount"),
  "fromNetworkId": z.string().describe("Identifier of the origination Network Profile"),
  "toNetworkId": z.string().describe("Identifier of the destination Network Profile"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}