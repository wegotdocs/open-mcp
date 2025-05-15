import { z } from "zod"

export const inputParamsSchema = {
  "interchangeId": z.string().optional(),
  "interchangeIdQualifier": z.string().optional()
}