import { z } from "zod"

export const inputParamsSchema = {
  "effective": z.string().datetime({ offset: true }).describe("Effective date/time").optional()
}