import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "number": z.string()
}