import { z } from "zod"

export const inputParamsSchema = {
  "componentId": z.string().optional()
}