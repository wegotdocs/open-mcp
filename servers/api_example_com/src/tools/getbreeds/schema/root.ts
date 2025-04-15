import { z } from "zod"

export const inputParams = {
  "limit": z.number().int().describe("limit the amount of results returned").optional()
}