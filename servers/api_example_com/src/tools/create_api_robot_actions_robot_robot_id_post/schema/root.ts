import { z } from "zod"

export const inputParamsSchema = {
  "robot_id": z.number().int(),
  "action": z.union([z.string(), z.null()]).optional(),
  "time": z.union([z.number().int(), z.null()]).optional()
}