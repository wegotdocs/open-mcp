import { z } from "zod"

export const inputParamsSchema = {
  "lang": z.string(),
  "id": z.string()
}