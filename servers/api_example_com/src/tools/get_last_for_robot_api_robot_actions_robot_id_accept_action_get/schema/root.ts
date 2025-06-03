import { z } from "zod"

export const inputParamsSchema = {
  "robot_id": z.number().int(),
  "status": z.union([z.string(), z.null()]).optional()
}