import { z } from "zod"

export const inputParamsSchema = {
  "operation": z.string().optional(),
  "minorversion": z.string().optional()
}