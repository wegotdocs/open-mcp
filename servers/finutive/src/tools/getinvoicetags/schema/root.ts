import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string().describe("Business ID"),
  "invoiceIds": z.string().describe("Comma-separated list of invoice IDs")
}