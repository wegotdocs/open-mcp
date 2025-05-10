import { z } from "zod"

export const inputParams = {
  "enroll_id": z.string().describe("活动报名ID").optional()
}