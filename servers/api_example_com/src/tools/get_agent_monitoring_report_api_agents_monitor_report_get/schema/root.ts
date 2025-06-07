import { z } from "zod"

export const inputParamsSchema = {
  "format": z.enum(["text","json"]).optional()
}