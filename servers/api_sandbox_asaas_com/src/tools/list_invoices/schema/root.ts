import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "effectiveDate[Ge]": z.string().describe("Filter by an issue date").optional(),
  "effectiveDate[Le]": z.string().describe("Filter by an issue date").optional(),
  "payment": z.string().describe("Filter by unique payment identifier").optional(),
  "installment": z.string().describe("Filter by the unique installment identifier").optional(),
  "externalReference": z.string().describe("Filter by invoice identifier in your system").optional(),
  "status": z.enum(["SCHEDULED","AUTHORIZED","PROCESSING_CANCELLATION","CANCELED","CANCELLATION_DENIED","ERROR"]).describe("Filter by situation").optional(),
  "customer": z.string().describe("Filter by unique customer identifier").optional()
}