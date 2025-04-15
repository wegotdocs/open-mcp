import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(5000),
  "product": z.string().max(5000)
}