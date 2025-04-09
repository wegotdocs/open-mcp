import { z } from "zod"

export const inputParams = {
  "settlement": z.string().max(5000)
}