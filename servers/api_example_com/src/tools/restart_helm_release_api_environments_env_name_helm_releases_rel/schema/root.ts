import { z } from "zod"

export const inputParamsSchema = {
  "env_name": z.string(),
  "release_name": z.string()
}