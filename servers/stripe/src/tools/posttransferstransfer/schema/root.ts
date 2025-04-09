import { z } from "zod"

export const inputParams = {
  "transfer": z.string().max(5000)
}