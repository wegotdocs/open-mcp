import { z } from "zod"

export const inputParamsSchema = {
  "Privilege": z.array(z.object({ "name": z.string() })).optional()
}