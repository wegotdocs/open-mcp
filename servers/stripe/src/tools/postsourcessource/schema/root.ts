import { z } from "zod"

export const inputParams = {
  "source": z.string().max(5000)
}