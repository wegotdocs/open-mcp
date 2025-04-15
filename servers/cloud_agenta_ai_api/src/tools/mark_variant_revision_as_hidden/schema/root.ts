import { z } from "zod"

export const inputParams = {
  "variant_id": z.string(),
  "revision_id": z.string()
}