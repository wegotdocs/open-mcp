import { z } from "zod"

export const inputParamsSchema = {
  "charge": z.string().max(5000).describe("The identifier of the charge to refund.")
}