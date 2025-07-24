import { z } from "zod"

export const inputParamsSchema = {
  "pattern": z.string(),
  "public_domain": z.string().optional(),
  "backend_domain": z.string()
}