import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "organization_id": z.number().int()
}