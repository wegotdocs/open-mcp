import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string(),
  "target": z.string()
}