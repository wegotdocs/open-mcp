import { z } from "zod"

export const inputParamsSchema = {
  "imdbId": z.string().optional()
}