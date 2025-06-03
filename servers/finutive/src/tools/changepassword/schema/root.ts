import { z } from "zod"

export const inputParamsSchema = {
  "oldPassword": z.string().optional(),
  "newPassword": z.string().optional()
}