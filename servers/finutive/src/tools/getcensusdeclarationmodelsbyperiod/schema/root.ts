import { z } from "zod"

export const inputParamsSchema = {
  "period": z.enum(["QUARTERLY","ANNUAL"]).optional()
}