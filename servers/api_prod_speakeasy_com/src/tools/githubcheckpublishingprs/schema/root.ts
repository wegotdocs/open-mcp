import { z } from "zod"

export const inputParamsSchema = {
  "generate_gen_lock_id": z.string(),
  "org": z.string(),
  "repo": z.string()
}