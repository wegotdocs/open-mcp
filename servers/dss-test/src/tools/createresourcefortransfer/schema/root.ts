import { z } from "zod"

export const inputParamsSchema = {
  "institutionId": z.string(),
  "path": z.string()
}