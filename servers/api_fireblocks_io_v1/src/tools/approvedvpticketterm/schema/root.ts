import { z } from "zod"

export const inputParamsSchema = {
  "ticketId": z.string(),
  "termId": z.string(),
  "asset": z.string().describe("Asset name"),
  "amount": z.string().describe("Amount"),
  "srcId": z.string().describe("Id of the vault that is used as the source of the asset."),
  "fee": z.string().describe("Transaction fee").optional(),
  "feeLevel": z.enum(["LOW","MEDIUM","HIGH"]).describe("Transaction fee level.").optional(),
  "note": z.string().describe("Transaction note").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}