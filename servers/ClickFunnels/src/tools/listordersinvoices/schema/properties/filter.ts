import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of Invoice IDs to filter by.").optional(),
  "status": z.string().describe("The status of the invoice to filter by.").optional(),
  "invoice_type": z.string().describe("The type of the invoice to filter by.").optional(),
  "invoice_number": z.string().describe("A comma-separated list of Invoice Numbers to filter by.").optional(),
  "external_id": z.string().describe("A comma-separated list of External IDs to filter by.").optional()
}