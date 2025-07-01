import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "customer": z.string().describe("Filter by Unique Customer Identifier").optional(),
  "customerGroupName": z.string().describe("Filter by customer group name").optional(),
  "billingType": z.enum(["UNDEFINED","BOLETO","CREDIT_CARD","DEBIT_CARD","TRANSFER","DEPOSIT","PIX"]).describe("Filter by billing type").optional(),
  "status": z.enum(["ACTIVE","EXPIRED","INACTIVE"]).describe("Filter by status").optional(),
  "deletedOnly": z.string().describe("Send true to return only removed subscriptions").optional(),
  "includeDeleted": z.string().describe("Send true to also recover removed subscriptions").optional(),
  "externalReference": z.string().describe("Filter by your system identifier").optional(),
  "order": z.string().describe("Ascending or descending order").optional(),
  "sort": z.string().describe("Which field will it be sorted by").optional()
}