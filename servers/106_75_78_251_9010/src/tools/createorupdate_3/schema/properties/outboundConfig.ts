import { z } from "zod"

export const inputParamsSchema = {
  "checkRepeatedCustomerOrderNo": z.boolean().optional()
}