import { z } from "zod"

export const inputParams = {
  "price": z.string().max(5000)
}