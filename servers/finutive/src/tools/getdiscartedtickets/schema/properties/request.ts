import { z } from "zod"

export const inputParamsSchema = {
  "discarted_id": z.string().optional()
}