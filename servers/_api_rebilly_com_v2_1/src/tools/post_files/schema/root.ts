import { z } from "zod"

export const inputParamsSchema = {
  "url": z.string().describe("The file URL").optional()
}