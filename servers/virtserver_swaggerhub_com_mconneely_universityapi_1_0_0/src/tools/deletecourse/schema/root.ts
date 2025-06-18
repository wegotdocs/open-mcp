import { z } from "zod"

export const inputParamsSchema = {
  "courseId": z.number().int()
}