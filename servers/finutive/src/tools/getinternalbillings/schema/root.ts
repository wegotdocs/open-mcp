import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.array(z.string()).describe("Filter by business ID").optional(),
  "startDate": z.string().date().describe("Filter by start date (yyyy-MM-dd)").optional(),
  "endDate": z.string().date().describe("Filter by end date (yyyy-MM-dd)").optional(),
  "discountType": z.enum(["PERCENTAGE","FIXED","PROMOTIONAL","NA","PAUSED"]).describe("Filter by discount type").optional(),
  "serviceProductId": z.array(z.string()).describe("Filter by service product ID").optional(),
  "serviceId": z.array(z.string()).describe("Filter by service ID").optional(),
  "paymentMethod": z.enum(["WANNME","GOCARDLESS","CASH","BANK_TRANSFER","TPV","QONTO","TO_PAY"]).describe("Filter by payment method").optional(),
  "paymentReferenceIsNull": z.boolean().describe("Filter by payment reference is null").optional(),
  "invoiceIsNull": z.boolean().describe("Filter by invoice is null").optional(),
  "clientInvoiceIsNull": z.boolean().describe("Filter by client invoice is null").optional(),
  "invoiceId": z.string().describe("Filter by invoice ID").optional(),
  "page": z.number().int().gte(0).describe("Zero-based page index (0..N)").optional(),
  "size": z.number().int().gte(1).describe("The size of the page to be returned").optional(),
  "sort": z.array(z.string()).describe("Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.").optional()
}