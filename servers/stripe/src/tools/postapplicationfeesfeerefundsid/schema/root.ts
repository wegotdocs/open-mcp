import { z } from "zod"

export const inputParams = {
  "fee": z.string().max(5000),
  "id": z.string().max(5000)
}