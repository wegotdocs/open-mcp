import { z } from "zod"

export const inputParams = {
  "location": z.string().max(5000)
}