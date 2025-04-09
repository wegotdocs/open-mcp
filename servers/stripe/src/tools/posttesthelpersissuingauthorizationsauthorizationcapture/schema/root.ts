import { z } from "zod"

export const inputParams = {
  "authorization": z.string().max(5000)
}