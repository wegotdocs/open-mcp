import { z } from "zod"

export const inputParamsSchema = {
  "activityId": z.number().int(),
  "comment": z.string()
}