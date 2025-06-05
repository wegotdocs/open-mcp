import { z } from "zod"

export const inputParamsSchema = {
  "access": z.string().readonly(),
  "refresh": z.string()
}