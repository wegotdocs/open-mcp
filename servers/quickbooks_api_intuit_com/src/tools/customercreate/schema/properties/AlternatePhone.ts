import { z } from "zod"

export const inputParamsSchema = {
  "FreeFormNumber": z.string().describe("Specifies the telephone number in free form.").optional()
}