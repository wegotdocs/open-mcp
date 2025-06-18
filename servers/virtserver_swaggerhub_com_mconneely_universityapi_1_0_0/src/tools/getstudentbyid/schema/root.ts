import { z } from "zod"

export const inputParamsSchema = {
  "studentId": z.number().int()
}