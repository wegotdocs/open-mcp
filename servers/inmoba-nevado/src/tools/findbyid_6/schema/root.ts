import { z } from "zod"

export const inputParamsSchema = {
  "provinceId": z.number().int()
}