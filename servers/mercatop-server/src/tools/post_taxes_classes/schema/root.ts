import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Tax class name.").optional()
}