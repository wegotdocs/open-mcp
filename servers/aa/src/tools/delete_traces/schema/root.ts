import { z } from "zod"

export const inputParamsSchema = {
  "node_id": z.string().uuid().optional(),
  "node_ids": z.array(z.string().uuid()).optional()
}