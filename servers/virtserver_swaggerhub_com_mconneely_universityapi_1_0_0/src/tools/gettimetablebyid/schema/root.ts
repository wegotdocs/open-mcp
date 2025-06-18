import { z } from "zod"

export const inputParamsSchema = {
  "timetableId": z.number().int()
}