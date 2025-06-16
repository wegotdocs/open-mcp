import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string(),
  "repo": z.string(),
  "generate_gen_lock_id": z.string()
}