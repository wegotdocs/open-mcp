import { z } from "zod"

export const inputParams = {
  "item": z.string().max(5000)
}