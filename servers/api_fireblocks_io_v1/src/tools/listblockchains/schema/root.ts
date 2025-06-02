import { z } from "zod"

export const inputParamsSchema = {
  "protocol": z.string().describe("Blockchain protocol").optional(),
  "deprecated": z.boolean().describe("Is blockchain deprecated").optional(),
  "test": z.boolean().describe("Is test blockchain").optional(),
  "ids": z.array(z.string()).describe("A list of blockchain IDs (max 100)").optional(),
  "pageCursor": z.string().describe("Page cursor to fetch").optional(),
  "pageSize": z.number().gte(1).lte(500).describe("Items per page (max 500)").optional()
}