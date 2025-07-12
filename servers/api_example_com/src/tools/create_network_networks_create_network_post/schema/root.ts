import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "label": z.union([z.string(), z.null()]).optional(),
  "location_name": z.string(),
  "ip_range": z.string(),
  "prefix": z.number().int(),
  "project_id": z.number().int()
}