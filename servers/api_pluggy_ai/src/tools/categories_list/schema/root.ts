import { z } from "zod"

export const inputParamsSchema = {
  "parentId": z.string().describe("Parent's primary identifier").optional()
}