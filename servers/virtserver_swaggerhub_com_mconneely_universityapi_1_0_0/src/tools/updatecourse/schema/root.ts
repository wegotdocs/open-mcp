import { z } from "zod"

export const inputParamsSchema = {
  "courseId": z.number().int(),
  "name": z.string().optional(),
  "description": z.string().optional(),
  "credits": z.number().int().optional()
}