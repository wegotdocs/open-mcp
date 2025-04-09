import { z } from "zod"

export const inputParams = {
  "id": z.string().max(5000),
  "transfer": z.string().max(5000)
}