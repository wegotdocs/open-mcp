import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.string().describe("A list of up to 50 project identifiers. This parameter accepts a comma-separated list.").optional()
}