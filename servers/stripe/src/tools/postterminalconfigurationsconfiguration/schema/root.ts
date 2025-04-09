import { z } from "zod"

export const inputParams = {
  "configuration": z.string().max(5000)
}