import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique installment identifier in Asaas"),
  "sort": z.string().describe("Filter by column name").optional(),
  "order": z.string().describe("Column ordering").optional()
}