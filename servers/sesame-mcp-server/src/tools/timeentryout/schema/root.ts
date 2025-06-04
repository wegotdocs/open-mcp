import { z } from "zod"

export const inputParamsSchema = {
  "coordinates": z.any().optional()
}