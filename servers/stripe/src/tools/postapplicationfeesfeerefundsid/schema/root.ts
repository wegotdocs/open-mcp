import { z } from "zod"

export const inputParamsSchema = {
  "fee": z.string().max(5000),
  "id": z.string().max(5000)
}