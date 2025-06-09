import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "id": z.number().optional(),
  "organization_id": z.number().optional(),
  "identification": z.string().optional()
}