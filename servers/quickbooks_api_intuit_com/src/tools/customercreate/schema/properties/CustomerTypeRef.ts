import { z } from "zod"

export const inputParamsSchema = {
  "value": z.string().describe("The unique numeric Id of the customer type. This maps to the CustomerType entity- CustomerType.Id.").optional()
}