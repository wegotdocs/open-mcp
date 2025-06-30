import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string().describe("product type, possible values are \"master\", \"trailer\", \"makingof\", \"interview\", \"comingsoon\"").optional(),
  "skip": z.string().describe("pagination skip, integer").optional(),
  "limit": z.string().describe("pagination limit, integer").optional(),
  "sort": z.string().describe("sorting method, possible values are \"asc\" \"desc\"").optional()
}