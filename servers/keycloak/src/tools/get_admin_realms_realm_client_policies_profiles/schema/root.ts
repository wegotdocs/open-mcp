import { z } from "zod"

export const inputParams = {
  "include-global-profiles": z.boolean().optional()
}