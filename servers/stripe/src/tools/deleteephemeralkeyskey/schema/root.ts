import { z } from "zod"

export const inputParams = {
  "key": z.string().max(5000)
}