import { z } from "zod"

export const inputParamsSchema = {
  "identifier": z.string().optional()
}