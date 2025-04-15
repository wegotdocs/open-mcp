import { z } from "zod"

export const inputParamsSchema = {
  "personalization_design": z.string().max(5000)
}