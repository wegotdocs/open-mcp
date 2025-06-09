import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "category_name": z.string()
}