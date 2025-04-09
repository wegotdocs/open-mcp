import { z } from "zod"

export const inputParams = {
  "levels": z.array(z.enum(["WARNING","ERROR"])).max(2).optional()
}