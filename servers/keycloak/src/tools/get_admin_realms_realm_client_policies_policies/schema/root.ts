import { z } from "zod"

export const inputParams = {
  "include-global-policies": z.boolean().optional()
}