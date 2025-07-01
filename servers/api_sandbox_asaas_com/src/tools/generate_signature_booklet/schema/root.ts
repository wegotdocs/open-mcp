import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique subscription identifier in Asaas"),
  "month": z.number().int().describe("Final month for generating the booklet").optional(),
  "year": z.number().int().describe("Final year for generating the booklet").optional(),
  "sort": z.string().describe("Filter by column name").optional(),
  "order": z.string().describe("Column ordering").optional()
}