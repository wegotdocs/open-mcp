import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "organization_id": z.number().int(),
  "object_id": z.union([z.number().int(), z.null()]).optional()
}