import { z } from "zod"

export const inputParamsSchema = {
  "search": z.any().describe("Search by fullname or email").optional(),
  "role": z.string().describe("Search by manager role").optional(),
  "select_all": z.boolean().describe("If true, returns all results without pagination").optional(),
  "offset": z.number().int().describe("Page number (zero-based)").optional(),
  "size": z.number().int().describe("Number of items per page").optional(),
  "sort_field": z.enum(["fullname","email","business_amount","business_services_amount","cost_hour","rating"]).describe("Field to sort by (fullname, email, business_amount, business_services_amount, cost_hour, rating)").optional(),
  "sort_dir": z.enum(["ASC","DESC"]).describe("Sort direction (ASC or DESC)").optional()
}