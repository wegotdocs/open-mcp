import { z } from "zod"

export const inputParams = {
  "url": z.string().url()
}