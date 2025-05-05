import { z } from "zod"

export const inputParamsSchema = {
  "connection": z.string(),
  "idle": z.string(),
  "request": z.string()
}