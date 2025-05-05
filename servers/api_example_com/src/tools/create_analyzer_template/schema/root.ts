import { z } from "zod"

export const inputParamsSchema = {
  "analyzerId": z.string(),
  "content": z.string()
}