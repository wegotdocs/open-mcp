import { z } from "zod"

export const inputParams = {
  "invoice_uuid": z.string().describe("UUID of the invoice")
}