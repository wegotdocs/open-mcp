import { z } from "zod"

export const inputParamsSchema = {
  "public_access": z.boolean().optional()
}