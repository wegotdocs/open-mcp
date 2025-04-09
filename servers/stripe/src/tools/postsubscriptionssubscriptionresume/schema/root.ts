import { z } from "zod"

export const inputParams = {
  "subscription": z.string().max(5000)
}