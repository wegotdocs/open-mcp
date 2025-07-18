import { z } from "zod"

export const inputParamsSchema = {
  "Active": z.boolean().describe("The optional filter value for use cases.").optional()
}