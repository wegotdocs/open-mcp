import { z } from "zod"

export const inputParamsSchema = {
  "levels": z.array(z.enum(["WARNING","ERROR"])).max(2).optional()
}