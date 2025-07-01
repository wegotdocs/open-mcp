import { z } from "zod"

export const inputParamsSchema = {
  "frequency": z.enum(["WEEKLY","MONTHLY"]).describe("Frequency").optional(),
  "quantity": z.number().int().gte(1).lte(51).describe("Number of repetitions. This transfer will be included as the first transaction of the recurrence.\n For the `WEEKLY` frequency, the maximum accepted is: `51`\n For the `MONTHLY` frequency, the maximum accepted is: `11`").optional()
}