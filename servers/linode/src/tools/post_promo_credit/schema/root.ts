import { z } from "zod"

export const inputParams = {
  "promo_code": z.string().min(1).max(32).describe("The Promo Code.")
}