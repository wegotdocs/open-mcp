import { z } from "zod"

export const inputParamsSchema = {
  "include-global-profiles": z.boolean().optional()
}