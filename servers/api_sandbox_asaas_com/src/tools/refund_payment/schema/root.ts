import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique payment identifier in Asaas"),
  "value": z.number().describe("Amount to be refunded").optional(),
  "description": z.string().describe("Reason for the refund").optional()
}