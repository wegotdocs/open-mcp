import { z } from "zod"

export const inputParamsSchema = {
  "page_location": z.string().optional()
}