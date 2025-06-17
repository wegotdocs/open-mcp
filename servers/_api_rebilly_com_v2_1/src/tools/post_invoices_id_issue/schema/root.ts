import { z } from "zod"

export const inputParamsSchema = {
  "issuedTime": z.string().datetime({ offset: true }).optional()
}