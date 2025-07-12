import { z } from "zod"

export const inputParamsSchema = {
  "vps_id": z.number().int(),
  "label": z.union([z.string(), z.null()]).optional(),
  "name": z.union([z.string(), z.null()]).optional()
}