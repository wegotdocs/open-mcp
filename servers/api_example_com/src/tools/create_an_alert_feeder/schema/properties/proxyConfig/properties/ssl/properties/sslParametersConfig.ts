import { z } from "zod"

export const inputParamsSchema = {
  "clientAuth": z.string().min(1).max(16).optional(),
  "protocols": z.array(z.string().min(1).max(16)).optional()
}