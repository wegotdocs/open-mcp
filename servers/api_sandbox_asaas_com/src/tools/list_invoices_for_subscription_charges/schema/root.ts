import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique subscription identifier in Asaas"),
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "effectiveDate[ge]": z.string().describe("Filter from an issue date").optional(),
  "effectiveDate[le]": z.string().describe("Filter until an issue date").optional(),
  "externalReference": z.string().describe("Filter by invoice identifier in your system").optional(),
  "status": z.enum(["SCHEDULED","WAITING_OVERDUE_PAYMENT","PENDING","SYNCHRONIZED","AUTHORIZED","PROCESSING_CANCELLATION","CANCELLED","CANCELLATION_DENIED","ERROR","NONE","CANCELED"]).describe("Filter by invoice status").optional(),
  "customer": z.string().describe("Filter by unique customer identifier").optional()
}