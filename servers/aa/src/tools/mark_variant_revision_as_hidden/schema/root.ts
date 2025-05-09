import { z } from "zod"

export const inputParamsSchema = {
  "variant_id": z.string(),
  "revision_id": z.string()
}