import { z } from "zod"

export const inputParamsSchema = {
  "include-global-policies": z.boolean().optional()
}