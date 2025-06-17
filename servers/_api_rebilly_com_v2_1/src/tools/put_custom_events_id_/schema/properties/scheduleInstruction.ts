import { z } from "zod"

export const inputParamsSchema = {
  "method": z.enum(["date-interval","day-of-month","day-of-week"])
}