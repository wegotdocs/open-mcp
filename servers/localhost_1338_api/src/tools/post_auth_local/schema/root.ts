import { z } from "zod"

export const inputParamsSchema = {
  "identifier": z.string().optional(),
  "password": z.string().optional()
}