import { z } from "zod"

export const inputParamsSchema = {
  "cityId": z.number().int()
}