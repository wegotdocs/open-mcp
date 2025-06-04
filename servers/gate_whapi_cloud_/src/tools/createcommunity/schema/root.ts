import { z } from "zod"

export const inputParamsSchema = {
  "subject": z.string(),
  "description": z.string()
}