import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().int().gt(0),
  "unit": z.enum(["Days","Hours","Minutes","Seconds","Milliseconds"])
}