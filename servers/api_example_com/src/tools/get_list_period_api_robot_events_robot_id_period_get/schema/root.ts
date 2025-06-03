import { z } from "zod"

export const inputParamsSchema = {
  "robot_id": z.number().int(),
  "from_date": z.string().datetime({ offset: true }),
  "to_date": z.string().datetime({ offset: true })
}