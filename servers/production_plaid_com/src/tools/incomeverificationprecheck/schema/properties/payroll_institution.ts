import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().nullable().describe("The name of payroll institution").optional()
}