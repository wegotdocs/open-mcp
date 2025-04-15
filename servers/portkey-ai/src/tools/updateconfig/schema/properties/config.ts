import { z } from "zod"

export const inputParamsSchema = {
  "virtual_key": z.string().optional()
}