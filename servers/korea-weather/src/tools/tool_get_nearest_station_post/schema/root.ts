import { z } from "zod"

export const inputParamsSchema = {
  "latitude": z.number(),
  "longitude": z.number()
}