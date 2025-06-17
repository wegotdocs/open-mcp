import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "type": z.enum(["debit","credit"]).describe("Invoice item's type"),
  "unitPrice": z.number().describe("Invoice item's price"),
  "quantity": z.number().int().describe("Invoice item's quantity").optional(),
  "productId": z.string().optional(),
  "description": z.string().describe("Invoice item's description").optional(),
  "discountAmount": z.number().describe("Invoice item discount amount").readonly().optional(),
  "periodStartTime": z.string().datetime({ offset: true }).describe("Start time").optional(),
  "periodEndTime": z.string().datetime({ offset: true }).describe("End time").optional(),
  "_links": z.array(z.union([z.string(), z.string()])).min(1).max(2).describe("The links related to resource").readonly().optional()
}