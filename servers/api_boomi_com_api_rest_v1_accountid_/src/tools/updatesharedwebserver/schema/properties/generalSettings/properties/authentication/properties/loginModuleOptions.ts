import { z } from "zod"

export const inputParamsSchema = {
  "loginModule": z.array(z.object({ "encrypt": z.boolean().optional(), "name": z.string(), "value": z.string() })).optional()
}