import { z } from "zod"

export const inputParamsSchema = {
  "movieId": z.array(z.number().int()).optional(),
  "movieFileIds": z.array(z.number().int()).optional()
}