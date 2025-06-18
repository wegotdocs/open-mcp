import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().describe("Search string").optional()
}