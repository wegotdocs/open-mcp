import { z } from "zod"

export const inputParamsSchema = {
  "session": z.string().max(5000)
}