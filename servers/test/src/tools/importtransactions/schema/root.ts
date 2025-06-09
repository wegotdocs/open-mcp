import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "file": z.string()
}