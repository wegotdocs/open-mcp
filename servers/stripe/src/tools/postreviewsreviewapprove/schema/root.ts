import { z } from "zod"

export const inputParams = {
  "review": z.string().max(5000)
}