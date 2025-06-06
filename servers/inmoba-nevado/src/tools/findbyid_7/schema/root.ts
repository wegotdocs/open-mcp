import { z } from "zod"

export const inputParamsSchema = {
  "countryId": z.number().int()
}