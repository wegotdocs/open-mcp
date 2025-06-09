import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "name": z.string(),
  "code": z.string()
}