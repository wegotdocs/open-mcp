import { z } from "zod"

export const inputParamsSchema = {
  "processId": z.string().optional()
}