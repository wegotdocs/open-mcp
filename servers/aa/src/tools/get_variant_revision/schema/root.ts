import { z } from "zod"

export const inputParamsSchema = {
  "variant_id": z.string(),
  "revision_number": z.number().int()
}