import { z } from "zod"

export const inputParamsSchema = {
  "invoice_uuid": z.string().describe("UUID of the invoice")
}