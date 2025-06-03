import { z } from "zod"

export const inputParamsSchema = {
  "robot_id": z.number().int(),
  "page": z.number().int().optional(),
  "page_size": z.number().int().optional()
}