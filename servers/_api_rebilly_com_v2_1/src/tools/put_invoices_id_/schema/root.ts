import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "customerId": z.string(),
  "websiteId": z.string(),
  "organizationId": z.string().optional(),
  "subscriptionId": z.string().optional(),
  "currency": z.string().describe("The currency three letter code"),
  "amount": z.number().describe("The Invoice's amount").readonly().optional(),
  "shippingAmount": z.number().describe("The Invoice's shipping amount").readonly().optional(),
  "billingAddress": z.string().optional(),
  "deliveryAddress": z.string().optional(),
  "notes": z.string().describe("Notes for the customer which will display on the invoice").optional(),
  "items": z.array(z.string()).describe("Invoice items array").readonly().optional(),
  "taxes": z.array(z.string()).describe("Taxes applied to this invoice").readonly().optional(),
  "discounts": z.array(z.string()).describe("Discounts applied").readonly().optional(),
  "status": z.enum(["draft","issued","past-due","paid","abandoned","voided"]).describe("Invoice status.").readonly().optional(),
  "delinquentCollectionPeriod": z.number().int().describe("Delinquent Collection Period - difference between paidTime and dueTime in days.").readonly().optional(),
  "collectionPeriod": z.number().int().describe("Collection Period - difference between paidTime and issuedTime in days.").readonly().optional(),
  "abandonedTime": z.string().optional(),
  "voidedTime": z.string().optional(),
  "paidTime": z.string().optional(),
  "dueTime": z.string().optional(),
  "issuedTime": z.string().optional(),
  "createdTime": z.string().optional(),
  "_links": z.array(z.union([z.string(), z.string(), z.string(), z.string(), z.string(), z.string(), z.string()])).min(1).max(6).describe("The links related to resource").readonly().optional()
}