import { z } from "zod"

export const inputParams = {
  "token": z.string().max(5000)
}