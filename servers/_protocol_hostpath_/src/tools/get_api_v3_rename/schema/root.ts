import { z } from "zod"

export const inputParamsSchema = {
  "movieId": z.number().int().optional()
}