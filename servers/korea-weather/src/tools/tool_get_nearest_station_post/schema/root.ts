import { z } from "zod"

export const inputParams = {
  "latitude": z.number(),
  "longitude": z.number()
}