import { z } from "zod"

export const inputParamsSchema = {
  "Message": z.string().optional(),
  "Subject": z.string().optional()
}