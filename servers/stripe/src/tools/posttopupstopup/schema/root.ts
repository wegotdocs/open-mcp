import { z } from "zod"

export const inputParams = {
  "topup": z.string().max(5000)
}