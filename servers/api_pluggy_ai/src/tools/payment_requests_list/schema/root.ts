import { z } from "zod"

export const inputParamsSchema = {
  "pageSize": z.number().describe("Page size for the paging request, default: 20").optional(),
  "page": z.number().describe("Page number for the paging request, default: 1").optional(),
  "from": z.string().date().describe("Filter payment requests by start date. Returns only requests created **on or after** this date.").optional(),
  "to": z.string().date().describe("Filter payment requests by end date. Returns only requests created **on or before** this date.").optional(),
  "customer": z.string().describe("Filter payment requests with one customer attribute (name, email, CPF or CNPJ)").optional(),
  "pixKey": z.string().describe("Filter payment requests by Pix Key").optional()
}