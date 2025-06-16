import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string(),
  "repo": z.string()
}