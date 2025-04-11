import { z } from "zod"

export const inputParams = {
  "effective": z.string().datetime({ offset: true }).describe("Effective date/time").optional()
}